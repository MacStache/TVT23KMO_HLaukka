import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Header = ({ title }) => {
  return <Text style={styles.header}>{title}</Text>;
};

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default Header;