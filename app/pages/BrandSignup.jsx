import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native';
import React, { useCallback, useState } from 'react';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedView } from '@/components/ThemedView';
import { router, useNavigation } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';
import { Dropdown, MultiSelect } from 'react-native-element-dropdown';

const BrandSignup = () => {
    const navigation = useNavigation()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [items, setItems] = useState([
        { label: 'Barter', value: 'Barter' },
        { label: 'Affiliated', value: 'Affiliated' },
        { label: 'Paid', value: 'Paid' },
    ]);

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

    const socialMedia = [
        { label: 'Youtube', value: 'Youtube' },
        { label: 'Facebook', value: 'Facebook' },
        { label: 'Instagram', value: 'Instagram' },
        { label: 'Twitter', value: 'Twitter' },
        { label: 'Linedin', value: 'Linedin' },
        { label: 'Tiktok', value: 'Tiktok' },
        { label: 'Twitch', value: 'Twitch' },
    ];

    const [selected, setSelected] = useState([]);

    const [value, setValue] = useState(null);

    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
        >
            <ThemedView>
                <View style={styles.container}>
                    <Image style={styles.topFace} source={require("../../assets/images/top.png")} />

                    <View>
                        <TextInput
                            style={styles.input}
                            placeholder="Brand Name"
                            onChangeText={text => setEmail(text)}
                            value={email}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Brand Email"
                            onChangeText={text => setPassword(text)}
                            value={password}
                        />

                        <View style={styles.containerDrop}>
                            <Dropdown
                                style={[styles.dropdown, styles.inputDrop]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                iconStyle={styles.iconStyle}
                                data={socialMedia}
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder="Connect Your Social Media"
                                value={value}
                                onChange={item => {
                                    setValue(item.value);
                                }}
                                renderLeftIcon={() => (
                                    <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
                                )}
                            />
                        </View>
                        <View style={styles.containerDrop}>

                            <MultiSelect
                                style={[styles.dropdown, styles.inputDrop]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                search
                                data={items2}
                                labelField="label"
                                valueField="value"
                                placeholder="Select the Niches"
                                searchPlaceholder="Search..."
                                value={selected}
                                onChange={item => {
                                    setSelected(item);
                                }}
                                renderLeftIcon={() => (
                                    <AntDesign
                                        style={styles.icon}
                                        color="black"
                                        name="Safety"
                                        size={20}
                                    />
                                )}
                                selectedStyle={styles.selectedStyle}
                            />
                        </View>
                    </View>

                    <Image style={styles.bottomFace} source={require("../../assets/images/bottom.png")} />
                    <View style={styles.optView}>
                        <TouchableOpacity style={styles.button} onPress={() => router.back()}>
                            <Text style={styles.buttonText}>Back </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, styles.buttonRight]} onPress={() => router.push("/pages/PersonalDetail")}>
                            <Text style={styles.buttonText}>Next </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ThemedView>
        </ParallaxScrollView>
    );
}

export default BrandSignup;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        color: "white",

    },
    topFace: {
        height: 220,
        width: 340,
        zIndex: 1,
        marginBottom: 10
    },
    bottomFace: {
        height: 200,
        width: 340,
        zIndex: 1,
        marginTop: 50

    },

    button: {
        backgroundColor: '#93AAFC',
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderRadius: 5,
        marginVertical: 10,
        // zIndex: 1
    },
    buttonText: {
        color: 'white',
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
    inputDrop: {
        width: 300,
        height: 40,
        marginBottom: 10,
        textAlign: 'center',
        color: "white",
        backgroundColor: "gray",
        zIndex: 10
    },
    optView: {
        flexDirection: "row",
        justifyContent: 'space-between',
        width: 340,
        marginBottom: 20,
    },


    containerDrop: {
        backgroundColor: 'gray',
        color: "white",
        padding: 10,
        borderRadius: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 10,
        height: 60, zIndex: 10
    },
    dropdown: {
        height: 40,
        backgroundColor: 'transparent',
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
        textAlign: "center",
        zIndex: 100
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 14,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    icon: {
        marginRight: 5,
    },
    selectedStyle: {
        borderRadius: 12,
        color: "white",
        backgroundColor: 'black',
        fontSize: 22,

    }, buttonRight: {
        backgroundColor: '#3117FA',
        fontSize: 22,
        textAlign: 'center',
    },

});