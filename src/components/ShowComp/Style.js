import { StyleSheet } from "react-native";
import { colorConstant, fontFamily } from "../../constants/colorConstant";

const styles = StyleSheet.create({
    infoContainer: {
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:'center',
        marginTop:5,
        },
    innerContainer:{
        flexDirection:'column',
        },
    title:{
        fontStyle:'normal',
        fontWeight: '500',
        fontSize: 18,
        color:colorConstant.white,
        fontFamily:fontFamily.fontFamily
        },
    locationContainer: {
        flexDirection: 'row',
        marginTop:12 ,
        alignItems:'center'
        },
    locationIcon: {
        marginRight: 6,
        },
    address: {
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 14,
        color:colorConstant.textColor,
        maxWidth:250,
        fontFamily:fontFamily.fontFamily
        },
    playIcon: {
        marginLeft: 'auto',
        },
});

export default styles;