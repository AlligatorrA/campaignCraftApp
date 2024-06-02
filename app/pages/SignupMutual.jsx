import { SafeAreaView, ScrollView, RefreshControl, View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React, { useState } from 'react';
// import DropDownPicker from 'react-native-dropdown-picker';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Link, router, useNavigation } from 'expo-router';

const SignupMutual = () => {
    const navigation = useNavigation()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [items, setItems] = useState([
        { label: 'Barter', value: 'Barter' },
        { label: 'Affiliated', value: 'Affiliated' },
        { label: 'Paid', value: 'Paid' },
    ]);
    const [open2, setOpen2] = useState(false);
    const [value2, setValue2] = useState(null);

    "Fashion",
        "Health & Fitness",
        "Beauty",
        "Mom-baby",
        "Travel",
        "Food & Drink",
        "Model",
        "Lifestyle",
        "Automobile Car Bikes",
        "Technology",
        "Entertainment",
        "Electronics Gadgets",
        "Home Decor"

    const [items2, setItems2] = useState([
        { label: 'Fashion', value: 'Fashion' },
        { label: 'Health & Fitness', value: 'Health & Fitness' },
        { label: 'Beauty', value: 'Beauty' },
        { label: 'Mom-baby', value: 'Mom-baby' },
        { label: 'Travel', value: 'Travel' },
        { label: 'Food & Drink', value: 'Food & Drink' },
        { label: 'Model', value: 'Model' },
        { label: 'Lifestyle', value: 'Lifestyle' },
        { label: 'Automobile Car Bikes', value: 'Automobile Car Bikes' },
        { label: 'Technology', value: 'Technology' },
        { label: 'Entertainment', value: 'Entertainment' },
        { label: 'Electronics Gadgets', value: 'Electronics Gadgets' },
        { label: 'Home Decor', value: 'Home Decor' },
    ]);

    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    };

    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
        >
            <ThemedView>
                <View style={styles.container}>
                    <Image style={styles.topFace} source={require("../../assets/images/top.png")} />
                    <View style={styles.optView}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Brand</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Influencer</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TextInput
                            style={styles.input}
                            placeholder="Please Enter your Email"
                            onChangeText={text => setEmail(text)}
                            value={email}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Brand/First Name"
                            onChangeText={text => setPassword(text)}
                            value={password}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Last Name"
                            onChangeText={text => setPassword(text)}
                            value={password}
                        />


                    </View>
                    <View >
                        <Link href="/pages/BrandSignup" style={[styles.button, styles.buttonRight]} ><Text style={styles.buttonText}>Sign Up ►</Text></Link>
                    </View>
                    <Image style={styles.bottomFace} source={require("../../assets/images/bottom.png")} />
                    <View style={styles.optView}>
                        <TouchableOpacity style={styles.button} onPress={() => router.back()}>
                            <Text style={styles.buttonText}>Back </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, styles.buttonRight]} onPress={() => router.push("/pages/BrandSignup")}>
                            <Text style={styles.buttonText}>Next </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ThemedView>
        </ParallaxScrollView>
    );
}

export default SignupMutual;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        color: "white",
        // marginTop: 20
    },
    topFace: {
        height: 220,
        width: 340,
        zIndex: 1
    },
    bottomFace: {
        height: 200,
        width: 340,
        zIndex: 1
    },

    button: {
        backgroundColor: '#93AAFC',
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderRadius: 5,
        marginVertical: 10,
        zIndex: 1
    },
    buttonText: {
        color: 'white',
        fontSize: 22,
        textAlign: 'center',
    },
    buttonRight: {
        backgroundColor: '#3117FA',
        fontSize: 22,
        textAlign: 'center',
    },
    input: {
        width: 340,
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        textAlign: 'center',
        color: "white",
        backgroundColor: "gray"
    },
    optView: {
        flexDirection: "row",
        justifyContent: 'space-between',
        width: 340,
        marginBottom: 20,
    },




});