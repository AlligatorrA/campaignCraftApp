
import { Image, StyleSheet, Text, TouchableOpacity, View, Animated } from 'react-native'
import React, { useEffect, useState } from 'react'

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Link, router } from 'expo-router';

export default function HomeScreen() {
  
    const [showLoginButton, setShowLoginButton] = useState(false);
    const fadeInAnimation = new Animated.Value(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoginButton(true);
        }, 1000); // Show login button after 10 seconds

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (showLoginButton) {
            Animated.timing(
                fadeInAnimation,
                {
                    toValue: 1,
                    duration: 1000, // Animation duration in milliseconds
                    useNativeDriver: true, // Add this line for performance
                }
            ).start();
        }
    }, [showLoginButton]);
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
     >
      <ThemedView style={styles.stepContainer}>
       <View style={styles.container}>
            <Image style={styles.topFace} source={require("../../assets/images/top.png")} />
            <Text style={styles.title}> Campaign Craft </Text>
            <Text style={styles.title1}>Help to Grow With Each Other</Text>
            <Image style={styles.bottomFace} source={require("../../assets/images/bottom.png")} />
            <Image />

            <View style={styles.container2}>
                {showLoginButton && (
                           <Link href="/pages/SignupMutual" style={styles.button} ><Text style={styles.buttonText}>Login/Sign Up</Text></Link>
                )}
            </View>
        </View>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stepContainer: {
      alignItems: 'center',
    justifyContent:"center"
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },  container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    topFace: {
        height: 230,
        width: 330
    },
    bottomFace: {
        height: 235,
        width: 330
    },
    title: {
        fontSize: 40,
        textAlign: "center",
        fontWeight: "bold",
        padding: 10,
        color: "white"
    },
    title1: {
        color: "white",
        fontSize: 40,
        textAlign: "center",
        margin: 10,
    },
    container2: {
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#93AAFC',
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderRadius: 5,
        width: 300,
        textAlign: "center"
    },
    buttonText: {
        color: 'white',
        fontSize: 22,
        textAlign: "center"
    },

});
