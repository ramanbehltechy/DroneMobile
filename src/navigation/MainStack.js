import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import navigationString from '../constants/navigationString';
import { ExploreScreen, LiveShowScreen, SearchScreen, SearchShowPlayer, Splash } from '../screens';
import { Image } from 'react-native';
import { titleConstant } from '../constants/titleConstant';
import { imagePath } from '../constants/imagePaths';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartShowScreen from '../screens/LiveShow/StartShowScreen';
import { colorConstant } from '../constants/colorConstant';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MyLocationStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={navigationString.LiveShowScreen} component={LiveShowScreen} />
      <Stack.Screen name={navigationString.StartShow} component={StartShowScreen} />
    </Stack.Navigator>
  );
}
function ExploreStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={navigationString.Explore} component={ExploreScreen} />

      <Stack.Screen name={navigationString.SearchShowPlayer} component={SearchShowPlayer} />
    </Stack.Navigator>
  );
}
function SearchStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={navigationString.Search} component={SearchScreen} />
      <Stack.Screen name={navigationString.SearchShowPlayer} component={SearchShowPlayer} />
    </Stack.Navigator>
  );
}

function MainStack() {
  return (
    <Tab.Navigator initialRouteName={navigationString.Splash}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#0089E2',
        tabBarStyle: {
          borderTopWidth: 0, 
          paddingBottom: 10,
          // position: 'absolute',
          // bottom: 18,
          // borderRadius: 120,
          // marginHorizontal: 16,
          borderColor: colorConstant.bottomtab, 
          backgroundColor: colorConstant.bottomtab,
          height: 84,
          elevation: 0
        },
        tabBarIcon: ({ focused }) => {
          let iconSource;
          let iconColor;
          if (route.name === titleConstant.MyLocation) {
            iconSource = focused
              ? imagePath.LocationIcon
              : imagePath.LocationIcon;
            iconColor = focused ? '#0089E2' : colorConstant.grey;
          }
          else if (route.name === titleConstant.Explore) {
            iconSource = focused
              ? imagePath.ExploreIcon
              : imagePath.ExploreIcon;
            iconColor = focused ? '#0089E2' : colorConstant.grey;
          }
          else if (route.name === titleConstant.Search) {
            iconSource = focused
              ? imagePath.Search
              : imagePath.Search;
            iconColor = focused ? '#0089E2' : colorConstant.grey;
          }
          return (
            <>
              <Image source={iconSource} style={{ width: 24, height: 24, tintColor: iconColor, marginTop: 8 }} resizeMode='contain' />
            </>
          );
        },
        tabBarLabelStyle: {
          paddingBottom: Platform.OS === 'android' ? 16 : 0,
          fontSize: 14,
          fontWeight: '400',
          fontStyle: 'normal'
        },
        tabBarHideOnKeyboard: true
      })}
    >
      <Tab.Screen name={navigationString.Splash} component={Splash}
        options={{
          tabBarStyle: { display: "none" },
          tabBarButton: () => null,
        }} />
      <Tab.Screen name={navigationString.MyLocations} component={MyLocationStack} />
      <Tab.Screen name={navigationString.Explore} component={ExploreStack} />
      <Tab.Screen name={navigationString.Search} component={SearchStack} />
    </Tab.Navigator>
  );
}
export default MainStack;
