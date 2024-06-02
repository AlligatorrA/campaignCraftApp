import React, { useState } from 'react';
import { View, TouchableOpacity, Text, TextInput, FlatList, StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Test = () => {
    const [expand, setExpand] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
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
        { label: 'Name', value: 'name' },
        { label: 'Email', value: 'email' },
    ];

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttonSelect} onPress={toggleDropdown}>
                <Text>Select Form</Text>
                <AntDesign name={expand ? "caretup" : "caretdown"} size={20} />
            </TouchableOpacity>
            {expand ? (
                <View style={styles.dropdown}>
                    <FlatList
                        data={formFields}
                        keyExtractor={(item) => item.value}
                        renderItem={({ item }) => (
                            <View style={styles.inputContainer}>
                                <Text>{item.label}</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder={item.label}
                                    value={formData[item.value]}
                                    onChangeText={(text) => handleInputChange(item.value, text)}
                                />
                            </View>
                        )}
                    />
                </View>
            ) : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    buttonSelect: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
    },
    dropdown: {
        marginTop: 10,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    inputContainer: {
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        padding: 8,
        marginTop: 5,
    },
});

export default Test;
