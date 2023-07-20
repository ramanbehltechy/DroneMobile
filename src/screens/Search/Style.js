import { StyleSheet,Platform } from "react-native";
import { colorConstant } from "../../constants/colorConstant";
const styles = StyleSheet.create({
    container: {
      flex:1,
      paddingHorizontal:16,
      marginHorizontal:Platform.OS==='ios'?16:0,
    },
    listContainer: {
      flexGrow: 1,
      paddingVertical: 10,
    },
    itemContainer: {
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(255, 255, 255, 0.1)',
      paddingVertical: 16,
    },
    serachcontainer: {
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
      fontWeight: '400',
      alignItems:'center',
      paddingVertical:Platform.OS==='ios'?16:10
    },
    NoResultFound:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    } 
  });

  export default styles;
  