import React, { useEffect, useRef, useState } from 'react';
import { Animated,View, ImageBackground, Image} from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from './Styles';
import LinearGradient from 'react-native-linear-gradient';
import { Logo } from '../../components';
import { imagePath } from '../../constants/imagePaths';
import navigationString from '../../constants/navigationString';


const Splash = ({navigation}) => {
  const globeAnimationValue = useRef(new Animated.Value(0)).current;
  const [showGIF, setShowGIF] = useState(false);
  const logoAnimationValue = useRef(new Animated.Value(0)).current;
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    Animated.timing(globeAnimationValue, {
      toValue: 1.8,
      duration: 2000,
      useNativeDriver: true,
    }).start(() => {
      setShowGIF(true);
      setTimeout(() => {
        setShowGIF(false);
        setShowLogo(true);
        Animated.timing(logoAnimationValue, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }).start(
          () => {
                    //working
                  navigation.navigate(navigationString.MyLocations)
                }
        );
      }, 2000);
    });
  }, []);

  const globeScale = globeAnimationValue.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.8],
    extrapolate: 'clamp',
  });


  return (
    <View style={styles.container}>
      {/* <View style={styles.gradientBackground}>
        <View style={styles.gradientOverlay} />
        <ImageBackground source={require('../../../assets/images/Background.png')} style={styles.backgroundImage} resizeMode='contain' />
      </View> */}
         <LinearGradient
        //  colors={['red', 'yellow', 'green' ]}
        colors={['#0B1D56','#111111']}
        // colors={['purple','red','orange']}
        style={styles.linearGradient}
       
      >
        <View style={styles.gradientOverlay} />
        <ImageBackground
          source={imagePath.Background}
          style={styles.backgroundImage}
          resizeMode="contain"
        />
      </LinearGradient>
      <View style={styles.centeredContainer}>
        {showGIF ? (
          <Animated.View
            style={[
              styles.ellipse,
              {
                transform: [{ scale: globeScale }],
              },
            ]}
          >
            <FastImage source={imagePath.RotatingEarth} style={styles.globeGIF} />
          </Animated.View>
        ) : showLogo ? (
          <View style={styles.container}>
          <Animated.View style={styles.logoContainer}>
           <Logo/>
           </Animated.View>
          <Animated.View style={[styles.textContainer]}>
          <Animated.Text style={styles.text}>Presented by</Animated.Text>
          <Image
            source={imagePath.SkyElementLogo} 
            resizeMode='contain'
          />
          </Animated.View> 
          </View>
        ) : (
          <Animated.View
            style={[
              styles.ellipse,
              {
                transform: [{ scale: globeScale }],
              },
            ]}
          >
            <Image source={imagePath.GlobeImage} style={styles.globeImage} />
          </Animated.View>
        )}
      </View>
    </View>
  );
};



export default Splash;
