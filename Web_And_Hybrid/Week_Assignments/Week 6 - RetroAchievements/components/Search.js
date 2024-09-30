import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import useHandleSearch from '../hooks/HandleSearch';
import User from './User';
import UserRecentAchievements from './UserRecentAchievements';

export default function Search() {
  const [username, setUsername] = useState('');
  const [userProfile, setUserProfile] = useState(null);
  const [userRecentAchievements, setUserRecentAchievements] = useState(null);

  return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter username to search..."
          placeholderTextColor="#888"
          value={username}
          onChangeText={setUsername}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => useHandleSearch(username, setUserProfile, setUserRecentAchievements)}
        >
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
        {userProfile && <User profile={userProfile} />}
        
        {userRecentAchievements && userRecentAchievements.length > 0 && (
        <>
          <Text style={styles.text}>Recent Achievements</Text>
          <UserRecentAchievements achievements={userRecentAchievements} />
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
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#202020',
  },
  text:{
    align: 'center',
    color: '#cc9900',
    marginTop: 5,
    marginBottom: 5,
  },
  textInput: {
    fontSize: 16,
    color: '#cc9900',
    backgroundColor: '#303030',
    padding: 10,
    borderRadius: 5,
    borderColor: '#444',
    borderWidth: 1,
    marginBottom: 10,
  },
  button: {
    borderWidth: 1,
    borderColor: '#606060',
    backgroundColor: '#161616',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 5,
    width: '100%',
  },
  buttonText: {
    color: '#cc9900',
    fontSize: 16,
  },
});