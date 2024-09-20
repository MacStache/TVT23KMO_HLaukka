import { View, StyleSheet, TextInput } from "react-native";
import React from "react";

export default function Search({ criteria, setCriteria }) {
  return (
    <View style={styles.searchBox}>
      <TextInput
        value={criteria}
        onChangeText={text => setCriteria(text)}
        placeholder='Search...'
        returnKeyType='search'
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchBox: {
    width: '80%',
    marginBottom: 40,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20, 
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
  },
});