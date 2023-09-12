import React from 'react';
import { ScrollView, View, StyleSheet, FlatList, Image } from 'react-native';

import { LinearGradientComponent, LiveShow, Map, PlayShow, StartShow } from '../../components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { imagePath } from '../../constants/imagePaths';
import { useSelector } from 'react-redux';//


const StartShowScreen = () => {
  const showDetails = useSelector(state => state.singleShow.showByLocation);//
  return (
    <LinearGradientComponent>
      <SafeAreaView style={{
        flex: 1, 
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
          <Image
            source={imagePath.playerLogo}
            resizeMode='cover'
            style={{width:'100%'}}
          />
          </View>
          {/* For Playing Show Available or have time to Start */}
          <View style={styles.playShow}>
            <PlayShow showData={showDetails}/>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradientComponent>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    paddingHorizontal: 16,
    paddingTop: Platform.OS === 'android' ? 30 : 5
  },
  mapContainer: {
    //flex: 1, 
    alignItems:'center',
    borderRadius: 10,
    overflow: 'hidden',
    //  marginBottom:30
  },
  playShow: {
    marginTop: 29, 
    paddingBottom: 30
  },
});

export default StartShowScreen;
