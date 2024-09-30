import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const User = ({ profile, profileNotFound }) => {
    return (
      <View style={styles.container}> 
        {!profile && !profileNotFound ? null : profileNotFound ? (
          <Text style={styles.textHeader}>Profile not found</Text>
        ) : ( 
          <>
            <View style={styles.topContainer}>
              <Image style={styles.image} source={{ uri: `https://retroachievements.org${profile.UserPic}` }} />
              <View style={styles.textContainer}>
                <Text style={styles.textHeader}>{profile.User}</Text>
                <Text style={styles.text}>
                  Member Since: <Text style={styles.textDate}>{profile.MemberSince}</Text>
                </Text>
                <Text style={styles.text}>Motto: {profile.Motto}</Text>
              </View>
            </View>
            <View style={styles.bottomContainer}>
              <Text style={styles.text}>Rich Presence: {profile.RichPresenceMsg}</Text>
              <Text style={styles.text}>Total Points: {profile.TotalPoints}</Text>
              <Text style={styles.text}>Total True Points: {profile.TotalTruePoints}</Text>
            </View>
          </>
        )}
      </View>
      );
    };

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#202020',
    padding: 10,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 5,
    borderColor: '#444',
    borderWidth: 1,
    width: '100%',
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  textContainer: {
    marginLeft: 10,
    flex: 1,
  },
  bottomContainer: {
    marginTop: 10,
  },
  text: {
    color: '#cc9900',
    fontSize: 16,
    marginBottom: 5,
  },
  textDate: {
    color: '#cc9900',
    fontSize: 16,
    fontStyle: 'italic',
  },
  textHeader: {
    color: '#cc9900',
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});

export default User;