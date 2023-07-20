import { Platform, StyleSheet } from "react-native";
import { colorConstant, fontFamily } from "../../constants/colorConstant";

const styles = StyleSheet.create({
    button: {
        backgroundColor: colorConstant.buttonColor,
        paddingHorizontal:Platform.OS==='ios'? 10:5,
        paddingVertical: 10,
        borderRadius: 20,
        alignItems:'center'
      },
      buttonText: {
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 14,
        color:colorConstant.white,
        fontFamily:fontFamily.fontFamily,
      },
  });

  export default styles;