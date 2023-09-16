import {ImageBackground, Image, SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import {Images} from '../../assets/images';
import {styles} from './splashScreen.style';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    //IT WILL RENDER THE SPLASH SCREEN FOR THREE SECONDS
    const timer = setTimeout(() => {
      clearTimeout(timer);
      navigation.replace('BottomTabBar');
    }, 3000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={Images.splashScreenBg}
        style={styles.backGroundImageView}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={Images.splashLogo}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SplashScreen;
