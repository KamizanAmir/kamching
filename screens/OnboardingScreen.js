import React from "react";
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = ({ navigation }) => {

    return(

        <Onboarding
            pages={[
            {
                backgroundColor: '#fff',
                image: <Image source={require('../assets/onboarding-img1.png')} />,
                title: 'Onboarding',
                subtitle: 'Done with React Native Onboarding Swiper',
            },
            {
                backgroundColor: '#fff',
                image: <Image source={require('../assets/onboarding-img2.png')} />,
                title: 'Onboarding2',
                subtitle: 'Done with React Native Onboarding Swiper',
            },
            {
                backgroundColor: '#fff',
                image: <Image source={require('../assets/onboarding-img3.png')} />,
                title: 'Onboarding3',
                subtitle: 'Done with React Native Onboarding Swiper',
            },
            ]}
        />
    );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
    container :{
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'
    },
});