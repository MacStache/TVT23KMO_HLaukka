import React, { useReducer, useCallback, useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, SafeAreaView, StatusBar } from 'react-native';
import { doc, addDoc, deleteDoc, firestore, collection, ITEMS, serverTimestamp, query, onSnapshot, orderBy } from './firebase/Config';
import Ionicons from '@expo/vector-icons/Ionicons'

const initialState = {
  data: [],
  selectedId: null,
  criteria: ''
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_ITEMS':
      return {
        ...state,
        data: action.payload
      };
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

  useEffect(() => {
    const q = query(collection(firestore, ITEMS), orderBy('timestamp', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const items = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      dispatch({ type: 'SET_ITEMS', payload: items });
    });

    return () => unsubscribe();
  }, []);

  const add = useCallback(async (name) => {
    if (name.trim() === '') return;
    const newItem = {
      name: name,
      timestamp: serverTimestamp()
    };
    await addDoc(collection(firestore, ITEMS), newItem);
    setInputValue('');
  }, []);

  const remove = useCallback(async (id) => {
    await deleteDoc(doc(firestore, ITEMS, id));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View>
      <Text style={styles.headerText}>Shopping List</Text>
      </View>
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
          <TouchableOpacity style={styles.row}>
            <Text>{item.name}</Text>
            <Ionicons style={styles.icons} name='trash' size={24} onPress={() => remove(item.id)} />
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
  headerText: {
    marginLeft: 10,
    fontSize: 24,
    fontWeight: 'bold',
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
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  list: {
    width: '100%',
  },
  listContent: {
    paddingLeft: 20,
  },
});