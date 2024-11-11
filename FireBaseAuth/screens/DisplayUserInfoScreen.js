import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, ToastAndroid } from 'react-native';
import { getAuth, signOut } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';
import { auth } from '../config/FirebaseConfig';

export default function DisplayUserInfoScreen() {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    const getUserProfile = () => {
      const user = auth.currentUser;
      if (user) {
        setEmail(user.email);
        console.log("Email: ", user.email);
        console.log("UID: ", user.uid);
      }
    };

    getUserProfile();
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        ToastAndroid.show("User signed out", ToastAndroid.SHORT);
        navigation.replace('Main');
      })
      .catch((error) => {
        ToastAndroid.show(error.message, ToastAndroid.SHORT);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>User Info Screen</Text>
      <Text style={styles.email}>Email: {email}</Text>
      <Button style={styles.button} title="Log Out" onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    width: '100%',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  email: {
    fontSize: 18,
    marginBottom: 40,
  },
  button: {
    marginTop: 20,
  },
});