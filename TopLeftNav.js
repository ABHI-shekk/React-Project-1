import { View, Text } from 'react-native';

import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

//import SignupScreen from './signupScreen';
const Drawer = createDrawerNavigator();

import HomeScreen from '../HomeScreen';
import ExploreScreen from '../exploreScreen';
import MyProfile from './MyProfile';
import TransactionHistory from './TransactionHistory';
import BookingHistory from './BookingHistory';
import TempleDescScreen from '../templeDescScreen';


import CustomDrawer from './CustomDrawer';
import { NavigationContainer } from '@react-navigation/native';


const TopLeftNav = () => {
    return (

        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />} screenOptions={{
            headerShown: false,
            drawerActiveBackgroundColor: '#aa18ea',
            drawerActiveTintColor: '#fff',
            drawerInactiveTintColor: '#100',
            drawerLabelStyle: {
                marginLeft: -25,
                fontFamily: 'Roboto',
                fontSize: 15,
            },


        }}>
            {/*<Drawer.Screen name="Home" component={HomeScreen} />*/}
            <Drawer.Screen name="Home" component={ExploreScreen} options={{
                drawerIcon: ({ color }) => (
                    <Ionicons name="home-outline" size={22} color={color} />
                )
            }} />
            <Drawer.Screen name="My Profile" component={MyProfile} options={{
                drawerIcon: ({ color }) => (
                    <Ionicons name="person-outline" size={22} color={color} />
                )
            }} />
            <Drawer.Screen name="Bookings" component={BookingHistory} options={{
                drawerIcon: ({ color }) => (
                    <Ionicons name="bookmarks-outline" size={22} color={color} />
                )
            }} />
            <Drawer.Screen name="Transactions" component={TransactionHistory} options={{
                drawerIcon: ({ color }) => (
                    <Ionicons name="cash-outline" size={22} color={color} />
                )
            }} />

            <Drawer.Screen name="temple description" component={TempleDescScreen} options={{ drawerItemStyle: { height: 0 } }} />
        </Drawer.Navigator>

    );
};

export default TopLeftNav;