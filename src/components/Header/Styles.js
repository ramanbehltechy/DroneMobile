import { StyleSheet } from "react-native";
import { colorConstant } from "../../constants/colorConstant";

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
    },
    image:{
      resizeMode:'contain'
    }
  });

  export default styles;