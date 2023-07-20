import { StyleSheet } from "react-native";
import { colorConstant, fontFamily } from "../../constants/colorConstant";

const styles = StyleSheet.create({
    start_show_container:{
        marginTop:24
    },
    infoContainer: {
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:'center',
        marginTop:12,
        // borderBottomWidth: 1,
        // borderBottomColor: 'rgba(255, 255, 255, 0.1)',
        // paddingBottom: 16,
          },
    innerContainer:{
        flexDirection:'column',
        },
    title: {
        fontStyle:'normal',
        fontWeight: '500',
        fontSize: 18,
        color:colorConstant.white,
        fontFamily:fontFamily.fontFamily
        },
    locationContainer: {
        flexDirection: 'row',
        marginTop:12 
        },
    locationIcon: {
        marginRight: 6,
        },
    address: {
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 14,
        color:colorConstant.textColor,
        fontFamily:fontFamily.fontFamily
        },
    playIcon: {
        marginLeft: 'auto',
        },
  });

  export default styles;