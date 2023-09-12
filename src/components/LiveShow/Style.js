import { StyleSheet } from "react-native";
import { colorConstant } from "../../constants/colorConstant";

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
        fontSize: 18,
        color:colorConstant.white
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
        maxWidth:250
        },
    playIcon: {
        marginLeft: 'auto',
        },
});

export default styles;