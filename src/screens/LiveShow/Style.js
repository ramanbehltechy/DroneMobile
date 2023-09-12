import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    paddingBottom: 20, 
    paddingHorizontal: 16,
    paddingTop: Platform.OS === 'android' ? 30 : 5
  },
  mapContainer: {
    borderRadius: 10,
    overflow: 'hidden',
    //  marginBottom:30
  },
  showList: {
    marginTop: 30,
    paddingBottom: 10
  },
  noShowAvailable: {
    marginTop: 45.5,
    paddingBottom: 10
  },
  playShow: {
    marginTop: 29
  },
  flatListContainer: {
    maxHeight: 300,
    overflow: 'scroll',
  },
  textContainer: {
    marginTop: 80,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingBottom: 10
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },


});

export default styles;