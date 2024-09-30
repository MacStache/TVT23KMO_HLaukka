import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import useHandleSearch from '../hooks/useHandleSearch';
import User from './User';
import AchievementsList from './Achievements';

export default function Search() {
  const [username, setUsername] = useState('');
  const [profile, setProfile] = useState(null);
  const [achievements, setAchievements] = useState(null);
  const [profileNotFound, setProfileNotFound] = useState(false);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Enter username to search..."
        placeholderTextColor="#888"
        value={username}
        onChangeText={setUsername}
      />
      <Pressable
        style={styles.button}
        onPress={() => useHandleSearch(username, setProfile, setAchievements, setProfileNotFound)}
      >
        <Text style={styles.buttonText}>Search</Text>
      </Pressable>
      {(profile || profileNotFound) && (
        <User profile={profile} profileNotFound={profileNotFound} />
      )}
      {achievements && achievements.length > 0 && (
        <>
          <Text style={styles.text}>Recent Achievements</Text>
          <AchievementsList achievements={achievements} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  },
  container: {
    backgroundColor: '#202020',
    padding: 10,
    marginBottom: 20,
    width: '100%',
  },
  textInput: {
    backgroundColor: '#fff',
    color: '#000',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: '100%',
  },
  button: {
    borderWidth: 1,
    borderColor: '#cc9900',
    backgroundColor: '#161616',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 5,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  text: {
    color: '#cc9900',
    fontSize: 18,
    marginBottom: 10,
  },
});