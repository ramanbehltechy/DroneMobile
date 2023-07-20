import { StyleSheet } from "react-native";
import { colorConstant, fontFamily } from "../../constants/colorConstant";

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop:33,
      paddingHorizontal:1
    },
    title: {
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: 20,
      color:colorConstant.white,
      fontFamily:fontFamily.fontFamily,
    },
    image:{
      resizeMode:'contain'
    }
  });

  export default styles;