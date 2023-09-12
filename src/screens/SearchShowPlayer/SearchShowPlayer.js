

import React from 'react';
import {SafeAreaView, View, StyleSheet, FlatList, Image } from 'react-native';

import { LinearGradientComponent, LiveShow, Map, PlayShow, StartShow } from '../../components';
import { useSelector } from 'react-redux';
import SearchShowPlay from '../../components/SearchShowPlay/SearchShowPlay';
import { imagePath } from '../../constants/imagePaths';


const SearchShowPlayer = () => {
  const singleSearchShow = useSelector(state => state.singleSearchShow.selectedShow);

  return (
    <LinearGradientComponent>
       <SafeAreaView style={{
        flex: 1, 
      }}>
      <View style={styles.container}>
        <View style={{
          alignItems: 'center',
          paddingVertical: 5
        }}>
          <Image
            source={imagePath.SkyElementLogo}
            resizeMode='contain'
          />
        </View>

        <View style={styles.mapContainer}>
         
          <Image
            source={imagePath.playerLogo}
            resizeMode='cover'
            style={{width:'100%'}}
          />
        </View>
        {/* For Playing Show Available or have time to Start */}
        <View style={styles.playShow}>
          <SearchShowPlay showData={singleSearchShow} />
        </View>
      </View>
      </SafeAreaView>
    </LinearGradientComponent>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 30
  },
  mapContainer: {
    alignItems:'center',
    borderRadius: 10,
    overflow: 'hidden',
    //  marginBottom:30
  },
  playShow: {
    marginTop: 29
  },
});

export default SearchShowPlayer;
