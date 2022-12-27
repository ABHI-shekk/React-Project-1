import { React } from 'react';

import { View, StyleSheet, ImageBackground, StatusBar, Dimensions, Image, Pressable, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles/styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

import TopLeftNav from './topleftnav/TopLeftNav';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import Navbar from './navbar';

const { height, width } = Dimensions.get('window');


const ganeshPic = require('./assets/templeApp-Pics/kanipakamGanesh.png');

const about = require('./assets/templeApp-Pics/about.png');
const ehundi = require('./assets/templeApp-Pics/e-hundi.png');
const seva = require('./assets/templeApp-Pics/seva.png');
const donation = require('./assets/templeApp-Pics/donation.png');
const gallery = require('./assets/templeApp-Pics/gallery-4.png');


const TempleDescScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/*<ImageBackground source={bgImage} resizeMode='stretch' style={StyleSheet.absoluteFill}></ImageBackground>*/}
            <StatusBar style='auto' />

            <View style={{ position: 'absolute', padding: height / 90, zIndex: 1 }}>
                <TouchableOpacity onPress={() => { }}>
                    <Ionicons name="menu-outline" size={height / 26} color='#fff' />
                </TouchableOpacity>
            </View>

            <View style={{ flex: 1 }}>
                <Image source={ganeshPic} style={{ resizeMode: 'cover', height: height / 3, width: width / 1 }} />
            </View>

            <View style={styles.navbarContainer}>

                <Navbar />

                {/*<View style={styles.navbar}>

                    <View style={[styles.navbaricons, styles.navbaraboutIcon]}>
                        <Pressable style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}>
                            <Image source={about} style={styles.navbarimage} />
                            <View style={styles.navbartextContainer}>
                                <Text style={styles.navbartitles}>About</Text>
                            </View>
                        </Pressable>
                    </View>

                    <View style={styles.navbaricons}>
                        <Pressable style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}>
                            <Image source={ehundi} style={styles.navbarimage} />
                            <View style={styles.navbartextContainer}>
                                <Text style={styles.navbartitles}>e-Hundi</Text>
                            </View>
                        </Pressable>
                    </View>

                    <View style={styles.navbaricons}>
                        <Pressable style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}>
                            <Image source={seva} style={styles.navbarimage} />
                            <View style={styles.navbartextContainer}>
                                <Text style={styles.navbartitles}>Seva</Text>
                            </View>
                        </Pressable>
                    </View>

                    <View style={styles.navbaricons}>
                        <Pressable style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}>
                            <Image source={donation} style={styles.navbarimage} />
                            <View style={styles.navbartextContainer}>
                                <Text style={styles.navbartitles}>Donation</Text>
                            </View>
                        </Pressable>
                    </View>

                    <View style={[styles.navbaricons, styles.navbargalleryIcon]}>
                        <Pressable style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}>
                            <Image source={gallery} style={styles.navbarimage} />
                            <View style={styles.navbartextContainer}>
                                <Text style={styles.navbartitles}>Gallery</Text>
                            </View>
                        </Pressable>
                    </View>

                </View>*/}

            </View>

            <View style={{ flex: 2 }}>

            </View>


        </View>

    );
}


export default TempleDescScreen;