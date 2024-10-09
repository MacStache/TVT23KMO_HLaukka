import React, { useReducer, useCallback, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, SafeAreaView, StatusBar } from 'react-native';
import uuid from 'react-native-uuid';

//Alustetaan reducerille taulukko, johon täytetään ToDo-listan lisäykset
const initialState = {
  data: [],
  selectedId: null,
  criteria: ''
};

//Käytetään reduceria lisäämään ja poistamaan tavaraa listalta
function reducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        data: [...state.data, action.payload]
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        data: state.data.filter(item => item.id !== action.payload)
      };
    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputValue, setInputValue] = useState('');

  //Luodaan ToDo-listan lisäyksille id ja nimi
  const add = useCallback((name) => {
    const newItem = {
      id: uuid.v4(),
      name: name
    };
    dispatch({ type: 'ADD_ITEM', payload: newItem });
    setInputValue('');
  }, []);

  //Poistetaan tavaraa listalta id:n perusteella
  const remove = useCallback((id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.inputRow}>
        <TextInput
          placeholder='Add new...'
          value={inputValue}
          onChangeText={(text) => setInputValue(text)}
          style={styles.input}
        />
        <TouchableOpacity onPress={() => add(inputValue)}>
          <Text style={styles.saveText}>Save</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={state.data} 
        keyExtractor={(item) => item.id}
        extraData={state.selectedId}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => remove(item.id)} style={styles.row}>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
        style={styles.list}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  input: {
    flex: 1,
    borderWidth: 0,
    padding: 10,
    marginRight: 10,
  },
  saveText: {
    color: 'blue',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  list: {
    width: '100%',
  },
  listContent: {
    paddingLeft: 20,
  },
});