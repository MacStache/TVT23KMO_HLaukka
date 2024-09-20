import React from 'react';
import { Text, StyleSheet } from 'react-native';

const InfoText = ({ infoText }) => {
  return <Text style={styles.info}>{infoText}</Text>;
};

const styles = StyleSheet.create({
  info: {
    fontSize: 12,
    textAlign: 'center',
    marginVertical: 5,
  },
});

export default InfoText;