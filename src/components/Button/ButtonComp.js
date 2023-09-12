import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

const ButtonComp = ({ title, buttonStyle }) => {
  return (
    <TouchableOpacity style={[styles.button, buttonStyle]}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};



export default ButtonComp;
