import { StyleSheet } from "react-native";
import { colorConstant } from "../../constants/colorConstant";

const styles = StyleSheet.create({
    button: {
        backgroundColor: colorConstant.buttonColor,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 20,
        alignItems:'center'
      },
      buttonText: {
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 14,
        color:colorConstant.white
      },
  });

  export default styles;