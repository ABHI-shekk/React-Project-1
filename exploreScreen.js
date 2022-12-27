import React from 'react';
import { View, Pressable, Text, StyleSheet, ImageBackground, StatusBar, Dimensions, Image, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';

import styles from './styles/styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import TopLeftNav from './topleftnav/TopLeftNav';

const { height, width } = Dimensions.get('window');

const bgImage = require('./assets/templeApp-Pics/exploreScreenBG.png');
const icon1 = require('./assets/templeApp-Pics/kanipakamIcon.png');



const ExploreScreen = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <ImageBackground source={bgImage} style={StyleSheet.absoluteFill} />
            <StatusBar style="auto" />

            <View style={{ position: 'absolute', padding: height / 90 }}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Ionicons name="menu-outline" size={height / 26} color='#fff' />
                </TouchableOpacity>
            </View>

            <View style={{ top: height / 6, }}>
                <ScrollView contentContainerStyle={{ height: ((height / 5) * (1.12) * (7)), }}>
                    <View style={styles.templeiconContainer}>

                        <View style={styles.templeiconrow}>

                            <View style={styles.templeicons}>
                                <Pressable style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]} onPress={() => navigation.navigate('TempleDesc')}>
                                    <Image source={icon1} style={styles.templeimage} />
                                </Pressable>
                            </View>

                            <View style={styles.templeicons}>
                                <Image source={icon1} style={styles.templeimage} />
                            </View>

                        </View>


                        <View style={styles.templeiconrow}>

                            <View style={styles.templeicons}>
                                <Pressable style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]} onPress={() => navigation.navigate('TempleDesc')}>
                                    <Image source={icon1} style={styles.templeimage} />
                                </Pressable>
                            </View>

                            <View style={styles.templeicons}>
                                <Image source={icon1} style={styles.templeimage} />
                            </View>

                        </View>

                        <View style={styles.templeiconrow}>

                            <View style={styles.templeicons}>
                                <Pressable style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]} onPress={() => navigation.navigate('TempleDesc')}>
                                    <Image source={icon1} style={styles.templeimage} />
                                </Pressable>
                            </View>

                            <View style={styles.templeicons}>
                                <Image source={icon1} style={styles.templeimage} />
                            </View>

                        </View>

                        <View style={styles.templeiconrow}>

                            <View style={styles.templeicons}>
                                <Pressable style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]} onPress={() => navigation.navigate('TempleDesc')}>
                                    <Image source={icon1} style={styles.templeimage} />
                                </Pressable>
                            </View>

                            <View style={styles.templeicons}>
                                <Image source={icon1} style={styles.templeimage} />
                            </View>

                        </View>

                        <View style={styles.templeiconrow}>

                            <View style={styles.templeicons}>
                                <Image source={icon1} style={styles.templeimage} />
                            </View>

                            <View style={styles.templeicons}>
                                <Image source={icon1} style={styles.templeimage} />
                            </View>

                        </View>

                        <View style={styles.templeiconrow}>

                            <View style={styles.templeicons}>
                                <Image source={icon1} style={styles.templeimage} />
                            </View>

                            <View style={styles.templeicons}>
                                <Image source={icon1} style={styles.templeimage} />
                            </View>

                        </View>

                        <View style={styles.templeiconrow}>

                            <View style={styles.templeicons}>
                                <Image source={icon1} style={styles.templeimage} />
                            </View>

                            <View style={styles.templeicons}>
                                <Image source={icon1} style={styles.templeimage} />
                            </View>

                        </View>

                    </View>
                </ScrollView>
            </View>
        </View>
    );
}


export default ExploreScreen;