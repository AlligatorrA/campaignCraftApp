import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native';
import React, { useState } from 'react';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedView } from '@/components/ThemedView';
import { router } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';
import { MultiSelect } from 'react-native-element-dropdown';

const PersonalDetail = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [items, setItems] = useState([
        { label: 'Barter', value: 'Barter' },
        { label: 'Affiliated', value: 'Affiliated' },
        { label: 'Paid', value: 'Paid' },
    ]);


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



    const [selected, setSelected] = useState([]);
    const [expand, setExpand] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        summarize: '',
        describeYourself: '',
    });

    const toggleDropdown = () => {
        setExpand(!expand);
    };

    const handleInputChange = (name, value) => {
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const formFields = [
        { label: 'Full Name', value: 'Enter name' },
        { label: 'Email', value: 'anandraj143@gmail.com' },
        { label: 'Summerize Profile Title', value: 'E.g., Fitness content creater & Student Athlete' },
        { label: 'Describe Yourself', value: 'Who are you,Your wants and what type of contants do you Create? who is your audience, be specific as this will help you show in  searchs ' },
    ];
    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
        >
            <ThemedView>
                <View style={styles.container}>
                    <Image style={styles.topFace} source={require("../../assets/images/top.png")} />


                    <View style={[styles.containerDrop, { width: 320, }]}>
                        <TouchableOpacity style={styles.formTag} onPress={toggleDropdown}>
                            <Text></Text>
                            <Text>Personal Details</Text>
                            <AntDesign name={expand ? "caretup" : "caretdown"} size={20} />
                        </TouchableOpacity>
                        {expand ? (
                            <FlatList
                                data={formFields}
                                keyExtractor={(item) => item.value}
                                renderItem={({ item }) => (
                                    <View style={styles.inputContainer}>
                                        <Text>{item.label}</Text>
                                        <TextInput
                                            style={styles.input}
                                            placeholder={item.value}
                                            value={formData[item.value]}
                                            onChangeText={(text) => handleInputChange(item.value, text)}
                                        />
                                    </View>
                                )}

                            />
                        ) : null}
                    </View>
                    <View style={styles.containerDrop}>

                        <MultiSelect
                            style={[styles.dropdown, styles.inputDrop]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            data={items2}
                            labelField="label"
                            valueField="value"
                            placeholder="Select the Niches"
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


                    <Image style={styles.bottomFace} source={require("../../assets/images/bottom.png")} />
                    <View style={styles.optView}>
                        <TouchableOpacity style={styles.button} onPress={() => router.back()}>
                            <Text style={styles.buttonText}>Back </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, styles.buttonRight]} onPress={() => router.push("/pages/Test")}>
                            <Text style={styles.buttonText}>Next </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ThemedView>
        </ParallaxScrollView>
    );
}

export default PersonalDetail;

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
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        textAlign: 'center',
        color: "white",
        backgroundColor: "gray",
        padding: 10,
        marginTop: 10
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
        zIndex: 100,
    },
    dropdown: {
        height: 40,
        backgroundColor: 'transparent',
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
        textAlign: "center",
        zIndex: 10
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

    // **************************
    formTag: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"

    },
    label: {
        padding: 3
    }


});