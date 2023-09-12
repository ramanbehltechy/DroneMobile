import { StyleSheet } from "react-native";
import { colorConstant } from "../../constants/colorConstant";

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    title: {
      fontSize: 20,
      fontWeight: '500',
      textAlign: 'center',
      fontStyle: 'normal',
      marginTop:40,
      marginBottom:8,
      color:colorConstant.white,
    },
    description: {
      fontStyle:'normal',
      fontSize: 16,
      textAlign: 'center',
      fontWeight:'400',
      lineHeight:24,
      color:colorConstant.textColor,
    },
  });

  export default styles;