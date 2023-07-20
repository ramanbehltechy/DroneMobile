import React, { useState } from 'react';
import { View,Text, SafeAreaView} from 'react-native';
import { LinearGradientComponent, Map,LiveShow,  NoShowAvailable, StartShow, PlayShow } from '../../components';
import styles from './Style';
import { useSelector } from 'react-redux';
import {API_KEY} from '@env'


const LiveShowScreen = ({navigation}) => {
  const showDetails=useSelector(state=>state.singleShow.showByLocation);
  const nearByShows=useSelector(state=>state.nearByShows.nearbyShows.shows) 
  const [isAudioButton,setIsAudioButton]=useState(false)

  const showDetailsData=useSelector(state=>state.singleShowDetails.singleShowData);

  return (
    
    <LinearGradientComponent>
      
        <SafeAreaView style={styles.container}>
          <View style={styles.mapContainer}>
            <Map/>
          </View>

         
        {/* For listing shows */}
  {  showDetails?
     (  <View style={styles.showList}>
            <LiveShow 
            setIsAudioButton={setIsAudioButton}
          showData={showDetails}
            />
           
          </View> )  
          :     
        ( nearByShows?.length == 0 ?null :
         <View style={styles.textContainer}>
          <Text style={styles.text}>Please click on a particular location Marker to see the related Show</Text>
        </View>
        )
}



          {/* No Show Available */}
      
          {nearByShows?.length == 0 && 
          <View style={styles.noShowAvailable}>
            <NoShowAvailable/>
          </View>
}
     

  <View>
  </View>
    </SafeAreaView>
    </LinearGradientComponent>
  );
};



export default LiveShowScreen;
