import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen/splashScreen';
import BottomTabBar from './bottomTabBar';
import SelEmployListScreen from '../screens/SelectedEmployeesListScreen/selEmployListScreen';

const Stack = createNativeStackNavigator();

const MainNavigationStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="BottomTabBar" component={BottomTabBar} />
        <Stack.Screen
          name="SelEmployListScreen"
          component={SelEmployListScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigationStack;
