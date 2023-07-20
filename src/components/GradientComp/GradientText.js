import React from 'react';
import { View, Text } from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from 'react-native-linear-gradient';

const GradientText = ({children,focused}) => {
  const gradientColors = focused ? ['#0089E2', '#00C7E2'] : ['#A1A1A1', '#A1A1A1'];
    return (
      <MaskedView
        maskElement={
          <View style={{  justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 14, fontWeight:'400',fontStyle:'normal',marginTop:7,fontFamily: 'Inter-Regular', }}>{children}</Text>
          </View>
        }
      >
        <LinearGradient colors={gradientColors} start={{ x: 0, y: 0 }}end={{ x: 1, y: 0 }}>
        <Text style={{ opacity:0,fontSize: 14,fontWeight:'400',fontStyle:'normal',marginTop:7,fontFamily: 'Inter-Regular',  }}>{children}</Text>
        </LinearGradient> 
      </MaskedView>
    );
  };
  
  export default GradientText;