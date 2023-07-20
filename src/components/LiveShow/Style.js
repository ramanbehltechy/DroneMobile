import { StyleSheet } from "react-native";
import { colorConstant, fontFamily } from "../../constants/colorConstant";

const styles = StyleSheet.create({
    infoContainer:{
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:'center',
        marginTop:12,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255, 255, 255, 0.1)',
        paddingBottom: 20,
        },
    innerContainer:{
        flexDirection:'column',
        },
    title:{
        fontStyle:'normal',
        fontWeight: '500',
        fontFamily:fontFamily.fontFamily,
        fontSize: 18,
        color:colorConstant.white
        },
    locationContainer: {
        flexDirection: 'row',
        marginTop:12,
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
        fontFamily:fontFamily.fontFamily,
        },
    playIcon: {
        marginLeft: 'auto',
        },
});

export default styles;