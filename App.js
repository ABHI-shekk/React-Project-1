//import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React from 'react';


import HomeScreen from './HomeScreen';
import ExploreScreen from './exploreScreen';
import TempleDescScreen from './templeDescScreen';
import SignupScreen from './signupScreen';
import Navbar from './navbar';
import TopLeftNav from './topleftnav/TopLeftNav';

import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  createStackNavigator,
  TransitionPresets,
  TransitionSpecs
} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>

      <Stack.Navigator options={{ ...TransitionPresets.SlideFromRightIOS, }}
        screenOptions={{ headerShown: false }}>

        <Stack.Screen component={HomeScreen} name='Home' />
        <Stack.Screen component={TopLeftNav} name='TopLeftNav' />
        <Stack.Screen component={ExploreScreen} name='Explore' />
        <Stack.Screen component={TempleDescScreen} name='TempleDesc' />
        <Stack.Screen component={SignupScreen} name='SignupScreen' />
        {/*<Stack.Screen component={Navbar} name='Navbar' />*/}

      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default App;
