import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, ToastAndroid, StyleSheet } from 'react-native';
import { app, auth } from './config/FirebaseConfig';
import EmailPasswordScreen from './screens/EmailPasswordScreen';
import DisplayUserInfoScreen from './screens/DisplayUserInfoScreen';

const Stack = createStackNavigator();

function MainScreenComponent({ navigation }) {
  useEffect(() => {
    const checkCurrentUser = () => {
      const user = auth.currentUser;
      if (user) {
        ToastAndroid.show("User is signed in", ToastAndroid.SHORT);
        navigation.replace('DisplayUserInfo');
      } else {
        ToastAndroid.show("No user is signed in", ToastAndroid.SHORT);
        navigation.replace('EmailPassword');
      }
    };

    checkCurrentUser();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>Loading...</Text>
    </View>
  );
}

function DisplayUserInfoComponent() {
  return (
    <View style={styles.container}>
      <DisplayUserInfoScreen />
    </View>
  );
}

function EmailPasswordComponent() {
  return (
    <View style={styles.container}>
      <EmailPasswordScreen />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={MainScreenComponent} />
        <Stack.Screen name="DisplayUserInfo" component={DisplayUserInfoComponent} />
        <Stack.Screen name="EmailPassword" component={EmailPasswordComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});