import { StyleSheet,Platform} from "react-native";
import { fontFamily } from "../../constants/colorConstant";

const styles = StyleSheet.create({
    container: {
     paddingHorizontal:16,
     paddingTop:30,
     marginHorizontal:Platform.OS==='ios'?16:0,
     

    },
    mapContainer: {
      borderRadius: 10,
      overflow: 'hidden',
      marginTop:Platform.OS==='ios'?30:0
    },
   showList:{
    marginTop:30,
   },
   noShowAvailable:{
    marginTop:45.5
   },
   playShow:{
    marginTop:29
   }, 
  flatListContainer: {
    maxHeight: 300, 
    overflow:'scroll',
  },
  textContainer: {
marginTop:80,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontFamily:fontFamily.fontFamily
  },
  
   
  });

  export default styles;