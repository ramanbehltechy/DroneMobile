import React from 'react';
import {  Image} from 'react-native';
import { imagePath } from '../../constants/imagePaths';

const Logo = () => {
  return (
      <Image
        source={imagePath.Logo} 
        resizeMode='contain'
      />
  );
};

export default Logo;