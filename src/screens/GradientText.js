import React from 'react';
import { View, Text } from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from 'react-native-linear-gradient';




const GradientText = () => {
    return (
      <MaskedView
        style={{ flex: 1 }}
        maskElement={
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Gradient Text</Text>
          </View>
        }
      >
        <LinearGradient
          colors={['#0089E2', '#00C7E2']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{ flex: 1 }}
        />
      </MaskedView>
    );
  };
  
  
  
  
  
  export default GradientText;