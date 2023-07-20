import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import navigationString from '../constants/navigationString';
import { ExploreScreen, LiveShowScreen, SearchScreen, SearchShowPlayer, Splash } from '../screens';
import { View,Platform} from 'react-native';
import { titleConstant } from '../constants/titleConstant';
import { imagePath } from '../constants/imagePaths';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartShowScreen from '../screens/LiveShow/StartShowScreen';
import { colorConstant } from '../constants/colorConstant';
import { GradientImage, GradientText } from '../components';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MyLocationStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name={navigationString.LiveShowScreen} component={LiveShowScreen} />
      <Stack.Screen name={navigationString.StartShow} component={StartShowScreen} />
    </Stack.Navigator>
  );
}
function ExploreStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name={navigationString.Explore} component={ExploreScreen} />
      <Stack.Screen name={navigationString.SearchShowPlayer} component={SearchShowPlayer} />
    </Stack.Navigator>
  );
}
function SearchStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
     <Stack.Screen name={navigationString.Search} component={SearchScreen} />
      <Stack.Screen name={navigationString.SearchShowPlayer} component={SearchShowPlayer} />
    </Stack.Navigator>
  );
}

function MainStack () {
	return (
        <Tab.Navigator initialRouteName={navigationString.Splash} 
            screenOptions={({ route }) => ({
              headerShown: false ,
              tabBarActiveTintColor:'#0089E2',
              tabBarStyle: {
                            position: 'absolute',
                            bottom: Platform.OS==='ios'?24:18, 
                            borderRadius: 120, 
                            marginHorizontal:16,
                            backgroundColor: colorConstant.bottomtab,
                            height:84,
                            elevation:0
                          },
              tabBarIcon: ({ focused }) => {
                let iconSource;
                if (route.name === titleConstant.MyLocation) {
                  iconSource = imagePath.LocationIcon;
                } 
                else if (route.name === titleConstant.Explore) {
                  iconSource =  imagePath.ExploreIcon;
                }
                else if (route.name === titleConstant.Search) {
                  iconSource = imagePath.Search;
                }
                return (
                  <View style={{flex:1,justifyContent:'center',alignItems:'center',marginTop:Platform.OS==='ios'?27:0}}>
                      <GradientImage source={iconSource} focused={focused} />
                      <GradientText focused={focused}>{route.name}</GradientText>
                  </View>
                );
                }, 
                tabBarHideOnKeyboard:true
              })}>
                 <Tab.Screen name={navigationString.Splash} component={Splash}
                      options={{
                        tabBarStyle: { display: "none" },
                        tabBarButton: () => null, }}/>
                 <Tab.Screen 
                  options={{
                    tabBarLabelStyle: { display: "none" },
                  }}
                  name={navigationString.MyLocations} component={MyLocationStack}/>
                  <Tab.Screen
                  options={{
                    tabBarLabelStyle: { display: "none" },
                  }}
                  name={navigationString.Explore} component={ExploreStack} />
                  <Tab.Screen 
                  options={{
                    tabBarLabelStyle: { display: "none" },
                  }}
                  name={navigationString.Search} component={SearchStack} />    
       </Tab.Navigator>
	);
}
export default MainStack;
