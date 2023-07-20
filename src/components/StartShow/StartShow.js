import React, { Component } from 'react';
import { View, Text, StyleSheet ,Image, TouchableOpacity} from 'react-native';
import { colorConstant } from '../../constants/colorConstant';
import ButtonComp from '../Button/ButtonComp';
import navigationString from '../../constants/navigationString';
import { useNavigation } from '@react-navigation/native';
import { imagePath } from '../../constants/imagePaths';
import styles from './Style';

const StartShow = () => { 
  const navigation=useNavigation();
    return (
      <View style={styles.start_show_container}>
         <ButtonComp title="Starts in 03:12 hrs" buttonStyle={{width:'40%',backgroundColor:colorConstant.bottomtab}}/>
         <View style={styles.infoContainer}>
        <View style={styles.innerContainer}>
        <Text style={styles.title}>Live Love Dance</Text>
        <View style={styles.locationContainer}> 
          <Image
            source={imagePath.PinIcon}
            style={styles.locationIcon}
            resizeMode="contain"/>
          <Text style={styles.address}>Texas, United States of America</Text>
        </View>
        </View> 
        <TouchableOpacity onPress={()=>{navigation.navigate(navigationString.StartShow)}}>
        <Image
          source={imagePath.AudioIcon}
          style={styles.playIcon}
          resizeMode="contain"/>
        </TouchableOpacity>
      </View>
      </View>     
    );
};

export default StartShow;
