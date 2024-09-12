import React, { useLayoutEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import MainAppbar from '../components/MainAppbar';

export default function Homescreen({ navigation }) {
    useLayoutEffect(() => {
        navigation.setOptions({
            header: (props) => <MainAppbar {...props} title="MD Nav Demo" navigation={navigation} isSecondScreen={true} />
        });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Text>SecondScreen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    }
});