import React from "react";
import { Appbar } from 'react-native-paper';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function MainAppbar({ title, navigation, isSecondScreen }) {
    return (
        <Appbar.Header
            mode="small"
            elevated={true}
        >
            {isSecondScreen ? (
            <>
            <Ionicons 
                name="arrow-back" 
                size={24} 
                onPress={() => navigation.navigate('Home')} 
                style={{ marginLeft: 15 }}
            />
            <Appbar.Content 
                title={title}
                style={{ marginLeft: 15, marginRight: 15}} />
            </>
            ) : (
            <>
            <Appbar.Content 
                title={title}
                style={{ marginLeft: 15, marginRight: 15}} />
            <Ionicons 
                name="arrow-forward" 
                size={24} 
                onPress={() => navigation.navigate('Second')} 
                style={{ marginRight: 15 }}
            />
            </>
            )}
        </Appbar.Header>
    );
}