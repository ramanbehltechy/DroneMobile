import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const LinearGradientComponent = ({  children }) => {
  
    return (
      
       

      

    <View style={styles.container}>
    
        <LinearGradient
     colors={['#0B1D56', '#111111',]} 
        
       
          style={styles.container}
        >
      
          {children}
      
          </LinearGradient>
     
    </View>


     
     
     
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex:1
      
    },
   
   
    
  });

  export default LinearGradientComponent;