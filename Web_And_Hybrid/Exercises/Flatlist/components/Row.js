import { Text, Pressable, StyleSheet } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons'

export default function Row({ item, selectedId, select, data, setData }) {
    const backgroundColor = item.id === selectedId ? '#f0f0f0' : '#fff';

    const remove = () => {
        const arrayWithoutRemove = data.filter((item) => item.id !== selectedId);
        setData(arrayWithoutRemove);
        select(null);
    };

    return (
        <Pressable style={[styles.row,{backgroundColor}]} onPress={() => select(item.id)}>
            <Text style={styles.text}>{item.name}</Text>
        {
            item.id === selectedId && <Ionicons style={styles.icons} name='trash' size={24} onPress={() => remove()} />
        }
        </Pressable>
    );
}

const styles = StyleSheet.create({
    row: {
        padding: 4,
        margin: 4,
        borderRadius: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text: {
        fontSize: 16,
    },
    icons: {
        
    },
});