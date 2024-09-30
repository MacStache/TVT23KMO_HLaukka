import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

const UserRecentAchievements = ({ achievements }) => {
  if (!achievements || achievements.length === 0) {
    return <Text style={styles.noAchievementsText}>No recent achievements found.</Text>;
  }

  const renderItem = ({ item }) => (
    <View style={styles.achievementContainer}>
      <Image style={styles.image} source={{ uri: `https://retroachievements.org${item.GameIcon}` }} />
      <Image style={styles.badge} source={{ uri: `https://retroachievements.org${item.BadgeURL}` }} />
      <View style={styles.textContainer}>
        <Text style={styles.textHeader}>{item.GameTitle} ({item.ConsoleName})</Text>
        <Text style={styles.text}>{item.Title} ({item.Points} points)</Text>
        <Text style={styles.text}>{item.Description}</Text>
        <Text style={styles.textDate}>Achieved on: {item.Date}</Text>
        <Text style={styles.text}></Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={achievements}
      renderItem={renderItem}
      keyExtractor={(item) => item.AchievementID.toString()}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 0,
  },
  noAchievementsText: {
    color: '#cc9900',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
  achievementContainer: {
    backgroundColor: '#202020',
    padding: 10,
    marginBottom: 5,
    borderRadius: 5,
    borderColor: '#444',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  text: {
    color: '#cc9900',
    fontSize: 16,
  },
  textHeader: {
    color: '#cc9900',
    fontSize: 16,
    fontWeight: 'bold',
  },
  textDate: {
    color: '#cc9900',
    fontSize: 16,
    fontStyle: 'italic',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  badge: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginLeft: 10,
  },
});

export default UserRecentAchievements;