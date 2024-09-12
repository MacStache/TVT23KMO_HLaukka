import React, { useLayoutEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import MainAppbar from '../components/MainAppbar';

export default function Homescreen({ navigation }) {
    useLayoutEffect(() => {
        navigation.setOptions({
            header: (props) => <MainAppbar {...props} title="MD Nav Demo" navigation={navigation} />
        });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Text>HomeScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    }
})