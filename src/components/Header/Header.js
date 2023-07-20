import React from 'react';
import { View, Text, TouchableOpacity,Image} from 'react-native';
import styles from './Styles';
import { imagePath } from '../../constants/imagePaths';

const Header = ({ title, style,textStyle ,onBackPress}) => {
  return (
    <View style={styles.container}>
       <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
      <Image source={imagePath.BackArrow} style={styles.image}  />
      </TouchableOpacity>
      <Text style={[styles.title,textStyle]}>{title}</Text>
    </View>
  );
};


export default Header;
