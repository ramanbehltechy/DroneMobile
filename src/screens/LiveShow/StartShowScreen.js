import React from 'react';
import { View,  StyleSheet,FlatList, SafeAreaView, Platform} from 'react-native';

import { LinearGradientComponent, LiveShow, Map, PlayShow, StartShow } from '../../components';


const StartShowScreen = () => {
 
  return (
    <LinearGradientComponent>
    <SafeAreaView style={styles.container}>
        <View style={styles.mapContainer}>
        <Map/>
        </View>
        {/* For Playing Show Available or have time to Start */}
        <View style={styles.playShow}>
          <PlayShow/>
        </View>
    </SafeAreaView>
    </LinearGradientComponent>
  );
};

const styles = StyleSheet.create({
  container: {
   paddingHorizontal:16,
   paddingTop:30,
   marginHorizontal:Platform.OS==='ios'?16:0,
  },
  mapContainer: {
    borderRadius: 10,
    overflow: 'hidden',
    marginTop:Platform.OS==='ios'?30:0
  //  marginBottom:30
  },
  playShow:{
    marginTop:29
  },
});

export default StartShowScreen;
