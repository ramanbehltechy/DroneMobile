import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    gradientBackground: {
      ...StyleSheet.absoluteFillObject,
    },
    // gradientOverlay: {
    //   flex: 1,
    //   position: 'absolute',
    //   width: '100%',
    //   height: '100%',
    //   backgroundColor: 'rgba(11, 29, 86, 1)',

    // },
    linearGradient: {
        ...StyleSheet.absoluteFillObject,
       
      },
      gradientOverlay: {
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
    backgroundImage: {
      marginTop: 20,
      height: '97%',
    },
    centeredContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    ellipse: {
      width: 166,
      height: 166,
      borderRadius: 100,
      alignItems: 'center',
      justifyContent: 'center',
      opacity: 0.9,
    },
    globeImage: {
      width: 170,
      height: 170,
    },
    globeGIF: {
      width: 170,
      height: 170,
    },
    logoText: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 10,
      color: 'white',
    },
    containerLogo:{
  flex:1,
  justifyContent: 'center',
      alignItems: 'center',
    },
  
    textContainer: {
      position: 'absolute',
      bottom: 35,
      
    },
    text: {
      fontSize: 16,
      fontWeight: '400',
      color: 'white',
      textAlign:'center',
      marginBottom:10
    },
    logoContainer:{
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden', 
    }
  });

  export default styles;