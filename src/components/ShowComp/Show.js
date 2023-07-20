import React from 'react';
import { View, Text,Image, TouchableOpacity} from 'react-native';
import { imagePath } from '../../constants/imagePaths';
import styles from './Style';

const Show = ({searchShow,onAudioIconClick}) => {
    return (
      <View>
         <View style={styles.infoContainer}>
        <View style={styles.innerContainer}>
        <Text style={styles.title}>{searchShow.showTitle}</Text>
        <View style={styles.locationContainer}> 
          <Image source={imagePath.PinIcon} style={styles.locationIcon} resizeMode="contain"/>
          <Text style={styles.address} numberOfLines={2} ellipsizeMode='tail'>{searchShow.address}</Text>
        </View>
        </View> 
        <TouchableOpacity onPress={onAudioIconClick}>
        <Image source={imagePath.AudioIcon} style={styles.playIcon} resizeMode="contain"/>
        </TouchableOpacity>
      </View>
      </View>
    );
};

export default Show;
