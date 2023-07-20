import { StyleSheet } from "react-native";
import { colorConstant } from "../../constants/colorConstant";

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal:14,
      width:'100%',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      borderRadius: 6,
      marginTop:26 
    },
    input: {
      flex: 1,
      color: colorConstant.white,
      fontSize: 16,
      fontStyle: 'normal',
      fontWeight: '400'
    },
  });

  export default styles;