import { StyleSheet ,Platform} from "react-native";
import { colorConstant, fontFamily } from "../../constants/colorConstant";

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent:'space-between',
      width:'47%'
    },
    image: {
      marginRight: 10,
    },
    title: {
      fontSize: 20,
      fontWeight: '500',
      marginTop: 26,
      fontStyle: 'normal',
      textAlign:'center',
      color:colorConstant.white,
      fontFamily:fontFamily.fontFamily
    },
    description: {
      fontSize: 16,
      fontWeight: '400',
      marginTop:8,
      fontStyle: 'normal',
      textAlign:'center',
      color:colorConstant.textColor,
      fontFamily:fontFamily.fontFamily
    },
    showTime: {
      fontSize: 16,
      fontWeight: '400',
      fontStyle: 'normal',
      textAlign:'center',
      color:colorConstant.blue,
      fontFamily:fontFamily.fontFamily
    },
    timerContainer: {
      flexDirection: 'row',
      alignContent:'center',
      alignItems:'center',
      marginTop:16
    },
    timerBox: {
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 10,
      backgroundColor:colorConstant.blue,
      paddingVertical:Platform.OS==='ios'?3:1,
      paddingHorizontal:12,
      borderRadius:4
    },
    timerText: {
      fontSize: 22,
      fontWeight: '400',
      fontStyle: 'normal',
      textAlign:'center',
      color:colorConstant.white,
      fontFamily:fontFamily.fontFamily
    },
    timerLabel: {
      fontSize: 16,
      fontWeight: '400',
      marginBottom: 10,
      fontStyle: 'normal',
      textAlign:'center',
      color:colorConstant.white,
      fontFamily:fontFamily.fontFamily
    },
    colenWrapper:{
      justifyContent:'center',
      alignItems:'center'
    },
    timerColon: {
      fontSize: 32,
      fontWeight: '400',
      color: colorConstant.white,
      textAlign:'center',
      fontFamily:fontFamily.fontFamily
  },
      timer_view:{
          marginTop:30
      }
  });

  export default styles;