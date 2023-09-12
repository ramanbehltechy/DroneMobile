import { StyleSheet } from "react-native";
import { colorConstant } from "../../constants/colorConstant";
const styles = StyleSheet.create({
    container: {
      // paddingHorizontal: 16
      flex: 1, 
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
      paddingVertical: 15, 
    },
    search_view: {
      flex: 1
    }, 
  });

  export default styles;
  