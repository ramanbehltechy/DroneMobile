import React from 'react';
import { View, Text,Image} from 'react-native';
import { imagePath } from '../../constants/imagePaths';
import styles from './Styles';

const NoShowAvailable = () => {
  return (
    <View style={styles.container}>
      <Image source={imagePath.NoMusic}/>
      <Text style={styles.title}>No Show Available</Text>
      <Text style={styles.description}>No show available at this location. To attend the show, please search or explore.</Text>
    </View>
  );
};

export default NoShowAvailable;
