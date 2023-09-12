import React from 'react';
import { View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const LinearGradientComponent = ({  children }) => {
    return (
      <LinearGradient colors={['#0B1D56', '#111111']} style={styles.container}>
        {children}
      </LinearGradient>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });

  export default LinearGradientComponent;