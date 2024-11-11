import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ToastAndroid, Image, TouchableOpacity } from 'react-native';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithCredential } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';
import { app, auth } from '../config/FirebaseConfig';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';

WebBrowser.maybeCompleteAuthSession();

export default function EmailPasswordScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginInfo, setLoginInfo] = useState('');
  const navigation = useNavigation();

  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: 'YOUR_WEB_CLIENT_ID',
  });

  useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;
      const googleCredential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, googleCredential)
        .then((userCredential) => {
          setLoginInfo("Sign in successful!");
          ToastAndroid.show("Sign in successful!", ToastAndroid.SHORT);
          navigation.replace('DisplayUserInfo');
        })
        .catch((error) => {
          const errorMessage = error.message;
          setLoginInfo(`Google Sign-In failed. \n\n ${errorMessage}`);
          ToastAndroid.show(errorMessage, ToastAndroid.SHORT);
        });
    }
  }, [response]);

  const createAccount = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setLoginInfo("User created! You can now login!");
        ToastAndroid.show("User created! You can now login!", ToastAndroid.SHORT);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setLoginInfo(`User creation failed.\n\n ${errorMessage}`);
        ToastAndroid.show(errorMessage, ToastAndroid.SHORT);
      });
  };

  const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setLoginInfo("Sign in successful!");
        ToastAndroid.show("Sign in successful!", ToastAndroid.SHORT);
        navigation.replace('DisplayUserInfo');
      })
      .catch((error) => {
        const errorMessage = error.message;
        setLoginInfo(`Sign In failed. \n\n ${errorMessage}`);
        ToastAndroid.show(errorMessage, ToastAndroid.SHORT);
      });
  };

  const handleGoogleSignIn = async () => {
    // Commented until google sign in works
    // promptAsync();
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.error}>{loginInfo}</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <View style={styles.buttonContainer}>
          <Button title="Register" onPress={() => createAccount(email, password)} />
          <Button title="Sign In" onPress={() => signIn(email, password)} />
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity onPress={handleGoogleSignIn}>
          <Image source={require('../assets/loginbutton.png')} style={styles.googleSignInButton} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    width: '100%',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    padding: 10,
    width: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 12,
  },
  bottomContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  googleSignInButton: {
    width: 200,
    height: 50,
    resizeMode: 'contain',
  },
});