import { Text, Pressable, StyleSheet } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Row({ item, selectedId, select, setTaskDone, data, setData }) {
    const backgroundColor = item.id === selectedId ? '#f0f0f0' : '#fff';

    const toggleTaskDone = () => {
        const updatedData = data.map((dataItem) => {
            if (dataItem.id === item.id) {
                return { ...dataItem, taskDone: !dataItem.taskDone };
            }
            return dataItem;
        });
        setData(updatedData);
    };

    const remove = () => {
        const arrayWithoutRemove = data.filter((dataItem) => dataItem.id !== item.id);
        setData(arrayWithoutRemove);
        select(null);
    };

    return (
        <Pressable 
            style={[styles.row, { backgroundColor }]} 
            onPress={() => {
                select(item.id);
                toggleTaskDone();
            }}
        >
            <Text 
                style={[styles.text, item.taskDone && styles.strikethrough]}
            >
                {item.name}
            </Text>
            <Ionicons name="trash-bin" size={24} color="red" onPress={remove} />
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
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
    },
    strikethrough: {
        textDecorationLine: 'line-through',
        color: 'gray',
    },
});