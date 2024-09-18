import { View, TextInput, Button, StyleSheet } from 'react-native';
import React, { useState } from 'react';

export default function Add({ add }) {
    const [name, setName] = useState('');

    const save = () => {
        add(name);
        setName('');
    };

    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.form} 
                value={name} 
                onChangeText={text => setName(text)} 
                placeholder='Item name' 
            />
            <View style={styles.buttonContainer}>
                <Button title='Save' onPress={save} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
        width: '100%',
    },
    form: {
        borderBottomWidth: 1,
        flex: 1,
        marginRight: 8,
    },
    buttonContainer: {
        width: '20%',
    },
});