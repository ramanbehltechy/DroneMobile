import React, { useState } from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import { LinearGradientComponent, Map, LiveShow, NoShowAvailable, StartShow, PlayShow } from '../../components';
import styles from './Style';
import { useSelector } from 'react-redux';
import { API_KEY } from '@env'
import { SafeAreaView } from 'react-native-safe-area-context';
import { imagePath } from '../../constants/imagePaths';


const LiveShowScreen = ({ navigation }) => {
  const showDetails = useSelector(state => state.singleShow.showByLocation);
  const nearByShows = useSelector(state => state.nearByShows.nearbyShows.shows)
  const [isAudioButton, setIsAudioButton] = useState(false)

  const showDetailsData = useSelector(state => state.singleShowDetails.singleShowData);

  return (

    <LinearGradientComponent>
      <SafeAreaView style={{
        flex: 1, 
        paddingBottom: 10
      }}>
        <View style={{
          alignItems: 'center',
          paddingVertical: 5
        }}>
          <Image
            source={imagePath.SkyElementLogo}
            resizeMode='contain'
          />
        </View>

        <ScrollView style={styles.container}>
          <View style={styles.mapContainer}>
            <Map />
          </View>


          {/* For listing shows */}
          {showDetails ?
            (<View style={styles.showList}>
              <LiveShow
                setIsAudioButton={setIsAudioButton}
                showData={showDetails}
              />

            </View>)
            :
            (nearByShows?.length == 0 ? null :
              <View style={styles.textContainer}>
                <Text style={styles.text}>Please click on a particular location Marker to see the related Show</Text>
              </View>
            )
          }


          {/* <View style={styles.flatListContainer}>
                  {showList.map((item) => (
                    <StartShow key={item.id} name={item.name} />
                  ))}
                </View>
        */}

          {/* No Show Available */}

          {nearByShows?.length == 0 &&
            <View style={styles.noShowAvailable}>
              <NoShowAvailable />
            </View>
          }

          {/* For Playing Show Available or have time to Start */}
          {/* {isAudioButton && <View style={styles.playShow}>
          <PlayShow/>
         </View>
} */}
          <View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradientComponent>
  );
};



export default LiveShowScreen;
