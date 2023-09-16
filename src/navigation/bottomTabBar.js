import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Colors} from '../assets/colors';
import {Images} from '../assets/images';
import HomeScreen from '../screens/HomeScreen/homeScreen';
import ZigZagScreen from '../screens/ZigZagScreen/zigZagScreen';

const Tab = createBottomTabNavigator();

const _renderText = (focused, text) => {
  return (
    <Text
      style={[
        styles.tabTextStyle,
        {
          color: focused ? Colors.primaryColor1 : Colors.primaryColor2,
        },
      ]}>
      {text}
    </Text>
  );
};

const _renderIcon = (focused, text) => {
  return (
    <Image
      source={text === 'home' ? Images.home : Images.zigZag}
      style={[
        styles.tabIconStyle,
        {
          tintColor: focused ? Colors.primaryColor1 : Colors.primaryColor2,
        },
      ]}
    />
  );
};

const BottomTabBar = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
      }}
      initialRouteName="HomeScreen">
      <Tab.Screen
        name="HomeScreen"
        options={{
          tabBarLabel: ({focused}) => _renderText(focused, 'Home'),
          tabBarIcon: ({focused}) => _renderIcon(focused, 'home'),
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="ZigZagScreen"
        options={{
          tabBarLabel: ({focused}) => _renderText(focused, 'Zig Zag'),
          tabBarIcon: ({focused}) => _renderIcon(focused, 'zigZag'),
        }}
        component={ZigZagScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomTabBar;

const styles = StyleSheet.create({
  tabTextStyle: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 12,
  },
  tabIconStyle: {
    height: 18,
    width: 18,
  },
  tabBarStyle: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: Colors.white,
    shadowColor: Colors.black,
    elevation: 15,
    paddingTop: 10,
    paddingBottom: 5,
    height: '9%',
  },
});
