import React, { useEffect, useState,useRef } from 'react';
import { View, PermissionsAndroid,StyleSheet,Alert, ActivityIndicator, Platform} from 'react-native';
import MapView, { Marker,Circle} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
import { useDispatch ,useSelector} from 'react-redux';
import { fetchNearbyShowsAction } from '../../store/actions/locationActions';

import axios from 'axios';
import { API_KEY } from '../../constants/apiConstant';
import { fetchShowByLocationAction } from '../../store/actions/singleShowAction';
import { fetchTimeZone } from '../../store/actions/timeZoneAction';

Geocoder.init(API_KEY);
const Map = () => {
    const mapRef = useRef(null);
    const dispatch=useDispatch();
   
    const [currentLocation, setCurrentLocation] = useState(null);
    const [nearByLocations,setNearbyLocations]=useState([]);
    const [circleCoordinates, setCircleCoordinates] = useState(null);
    const [nearbyWithinRadius, setNearbyWithinRadius] = useState([]);
    const [timeZone,setTimeZone]=useState('');

    const nearByShows=useSelector(state=>state.nearByShows.nearbyShows.shows)
    const loading=useSelector(state=>state.nearByShows.loading)
  

    useEffect(() => {
        checkLocationPermission();
      }, [timeZone]);

    const handlePermissionDenied = () => {
      console.log('Location permission denied'); 
    };

    const getLocation = () => {
        Geolocation.getCurrentPosition(
          position => {
            const { latitude, longitude } = position.coords;
                  setCurrentLocation({ latitude, longitude });         
            //for fetching near by locations  
           getTimeZone(latitude,longitude)
           fetchNearbyLocations(latitude,longitude,timeZone);
          },
          error => {
            console.log('Error occurred. Error code: ' + error.code + ', message: ' + error.message);
          },
          { enableHighAccuracy: true, timeout: 30000, maximumAge: 1000 }
        );
      };

      //For Calculating TimeZone
      const getTimeZone=async(latitude, longitude)=>{
      
        
        const apiUrl=`https://maps.googleapis.com/maps/api/timezone/json?location=${latitude},${longitude}&timestamp=${Math.floor(Date.now()/1000)}&key=${API_KEY}`;
        try{
            const response=await axios.get(apiUrl);
            const {timeZoneId}=response.data;
            dispatch(fetchTimeZone(timeZoneId))

            setTimeZone(timeZoneId)  
        }catch(error){
            console.log("Error Fetching time Zone:", error)
        }
      }
    const checkLocationPermission = async () => {
      if (Platform.OS === 'android') {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Location Permission',
              message: 'This app needs access to your location.',
              buttonNeutral: 'Ask Me Later',
              buttonNegative: 'Cancel',
              buttonPositive: 'OK',
            }
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            getLocation();
          } else {
            handlePermissionDenied();
          }
          } catch (error) {
            console.log('Error requesting location permission: ', error);
          }
        } else {
          getLocation();
        }
      };

    useEffect(() => {
          if ( nearByLocations?.length > 0 && mapRef.current) {
        const coordinates = nearByLocations.map((location) => location.coordinate);

        mapRef.current.fitToCoordinates(coordinates, {
          edgePadding: { top: 100, right: 100, bottom: 100, left: 100 },
          animated: true,
        });
  
        const circleCoordinates = getCircleCoordinates(coordinates);
        setCircleCoordinates(circleCoordinates);
      }
    }, [nearByLocations]);
      const fetchNearbyLocations = async(latitude, longitude,timeZone) => {
        // const response = await Geocoder.from(28.200550131057337, 76.83841208764927 );
       
        // const address = response.results[0].formatted_address;
      const currentDateTime=new Date();
      const year=currentDateTime.getFullYear();
      const month=(currentDateTime.getMonth()+1).toString().padStart(2,'0');
      const day=currentDateTime.getDate().toString().padStart(2,'0');
      const hours=currentDateTime.getHours().toString().padStart(2,'0');
      const minutes=currentDateTime.getMinutes().toString().padStart(2,'0');
      const date=`${year}-${month}-${day}`
      const time=`${hours}:${minutes}`
       const payload={
        longitude,
        latitude,
        date,
        time,
      timezone:timeZone
       
       }
        
        // dispatch(fetchNearbyLocationsAction(showData));
        dispatch(fetchNearbyShowsAction(payload));
      };

      useEffect(() => {
        if (nearByShows?.length > 0) {
          setNearbyLocations( nearByShows?.map((location)=>
        
          (
            {
           
             ...location.location,
              coordinate:{
                longitude:location.location?.coordinates[0],
                latitude:location?.location.coordinates[1],
            },
            address: location.address,
            id:location._id,
            startTime: location.startTime
          }
          )
          ));
        }
      }, [nearByShows]);


      
      const getCircleCoordinates = (coordinates) => {

        const latitudeSum = coordinates.reduce((sum, c) => sum + c.latitude, 0);
        const longitudeSum = coordinates.reduce((sum, c) => sum + c.longitude, 0);
        const center = {
          latitude: latitudeSum / coordinates.length,
          longitude: longitudeSum / coordinates.length,
        };
    
        // const nearbyCoordinates = coordinates.filter((coordinate) => {
        //   const distance = getDistance(center, coordinate);
        //   return distance <= 1000; // Adjust the radius here
        // });
        
        {/*const radius = Math.max(
          ...coordinates.map((coordinate) =>
            getDistance(center, coordinate)
          )
        );*/}
        let radius;
        if(Platform.OS==='ios'){
          radius = Math.max(
            ...coordinates.map((coordinate) =>
              getDistance(center, coordinate)
            )
          ) + 10;//for ios
        } else{
          radius = Math.max(
            ...coordinates.map((coordinate) =>
              getDistance(center, coordinate)
            )
          ) + 100;//for android
        }
    
        return { center,radius };
      };
     

      const getDistance = (coord1, coord2) => {
        const R = 6371; // Earth's radius in kilometers
        const dLat = deg2rad(coord2.latitude - coord1.latitude);
        const dLon = deg2rad(coord2.longitude - coord1.longitude);
        const a =
          Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(deg2rad(coord1.latitude)) *
            Math.cos(deg2rad(coord2.latitude)) *
            Math.sin(dLon / 2) *
            Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = R * c; // Distance in kilometers
        const radius = distance * 1000 + 10; // Convert to meters
        return radius;
      };
 
      
      const deg2rad = (deg) => {
        return deg * (Math.PI / 180);
      };
   
      const handleMarkerPress = async (address, latitude, longitude,id) => {
        dispatch(fetchShowByLocationAction(id))
      };
   
      const handleCurrentMarkerPress = async (latitude, longitude) => {
        
        try {
          const response = await Geocoder.from(latitude, longitude);
          const formattedAddress = response.results[0].formatted_address;
          Alert.alert('AddressCurrentNew', formattedAddress);
        } catch (error) {
          console.log('Error retrieving address: ', error);
        }
      };
      useEffect(() => {
        if (nearByLocations?.length > 0 && circleCoordinates) {
          const nearbyWithinRadius = nearByLocations.filter(location => {
            const distance = getDistance(
              circleCoordinates.center,
              location.coordinate
            );
            return distance <= 1000;
          });
          setNearbyWithinRadius(nearbyWithinRadius);
        }
      }, [nearByLocations, circleCoordinates]);
  return (
    <View style={styles.container}>
      {loading ?  (
        <View style={{height:346,alignItems:'center',justifyContent:'center'}}>
          <ActivityIndicator size="large" color="blue" /> 
          </View>
  
):
currentLocation ?(
        <MapView
        style={styles.map}
        zoomControlEnabled={true}
        showsCompass={true}
        ref={mapRef}
         
          initialRegion={{
            latitude: currentLocation.latitude,
            longitude: currentLocation.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {/*<Marker coordinate={currentLocation} 
          title={`Latitude: ${currentLocation.latitude.toFixed(6)}, 
          Longitude: ${currentLocation.longitude.toFixed(6)}`} 
          pinColor='red'
          onPress={()=>handleCurrentMarkerPress(currentLocation.latitude,currentLocation.longitude)}
          />*/}
          {nearByLocations?.map((location, index) => {
            let showTime = new Date();
            const [showHours, showMinutes] = location?.startTime.split(':');
            showTime.setHours(showHours, showMinutes, 0);
            let liveTime = Math.max(showTime.getTime() - new Date().getTime(), 0)
            
            return(
            <Marker
              key={index}
              coordinate={location.coordinate}
              title={location.address}
              pinColor={liveTime <= 0 ? "#0A9210": "red"}
              onPress={() =>
                handleMarkerPress(
                  location.address,
                  location.coordinate.latitude,
                  location.coordinate.longitude,
                  location.id
                 
                )
              }
            />
            )
          })}
          { nearByLocations?.length > 0 && circleCoordinates && (
            <Circle
              center={circleCoordinates.center}
              radius={circleCoordinates.radius }
              strokeColor="rgba(0, 0, 255, 0.5)"
              fillColor="rgba(0, 0, 255, 0.1)"
            />
          )}
        </MapView>
      ):null}
    </View>

    
  );
};
  const styles = StyleSheet.create({
    container: {
      height: 346,
      width: '100%',
      justifyContent: 'flex-end',
      alignItems: 'center',
      
    },
    map: {
      ...StyleSheet.absoluteFillObject,
      //borderRadius:50
    },
   });


export default Map;