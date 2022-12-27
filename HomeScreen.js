import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    StatusBar,
    Pressable,
    Image,
    Button,
    Dimensions
} from 'react-native'
import React from 'react';

import styles from './styles/styles';

const bgImage = require('./assets/templeApp-Pics/bgImage.jpg');
const exploreButton = require('./assets/templeApp-Pics/explore.png');
const logoImage = require('./assets/templeApp-Pics/logo.png');
const signupButton = require('./assets/templeApp-Pics/sign-up-button-3.png');

const { height, width } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {

    return (

        <View style={styles.container}>

            <ImageBackground source={bgImage} style={StyleSheet.absoluteFill}>
            </ImageBackground>
            <StatusBar style="auto" />

            <View style={styles.homescreenlogoContainer}>
                <Image source={logoImage} style={styles.homescreenlogo} />
            </View>

            <View style={styles.exploreButtonContainer}>
                <Pressable style={({ pressed }) => [
                    { opacity: pressed ? 0.5 : 1.0 }
                ]} onPress={() => navigation.navigate('TopLeftNav')}>
                    <Image source={exploreButton} style={styles.exploreButtonStyle} />
                </Pressable>

                {/*<Pressable style={({ pressed }) => [
                    { opacity: pressed ? 0.5 : 1.0 }
                ]} onPress={() => navigation.navigate('SignupScreen')}>
                    <Image source={signupButton} style={{ resizeMode: 'center', height: height / 20, width: width / 3, marginTop: height / 40 }} />
            </Pressable>*/}
            </View>


        </View >
    );
}

export default HomeScreen;