import React from 'react';
import { Image, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';

const GradientImage = ({ source, focused }) => {
    return (
        <MaskedView
          style={{ width: 20, height: 20}}
          maskElement={
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Image source={source} style={{ width: 20, height: 20 }} resizeMode="contain" />
             </View>
          }
        >
          <LinearGradient
            colors={focused ? ['#0089E2', '#00C7E2'] : ['#A1A1A1', '#A1A1A1']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{ flex: 1 }}
          />
        </MaskedView> 
    );
  };
  
  export default GradientImage;
  