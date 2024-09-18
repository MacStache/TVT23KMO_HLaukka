import React, { useCallback, useState, useEffect } from 'react';
import { SafeAreaView, Text, FlatList, StyleSheet, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from 'expo-constants';
import uuid from 'react-native-uuid';
import Add from './components/Add';
import Row from './components/Row';
import Search from './components/Search';

const STORAGE_KEY = '@shopping_list';

export default function App() {
  const [data, setData] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [criteria, setCriteria] = useState(''); // Add criteria state

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    storeData(data);
  }, [data]);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem(STORAGE_KEY);
      const json = JSON.parse(value);
      if (json === null) {
        setData([]);
      } else {
        setData(json);
      }
    } catch (ex) {
      console.log(ex);
    }
  };

  const storeData = async (value) => {
    try {
      const json = JSON.stringify(value);
      await AsyncStorage.setItem(STORAGE_KEY, json);
    } catch (ex) {
      console.log(ex);
    }
  };

  const add = useCallback((name) => {
    const newItem = {
      id: uuid.v4(),
      name: name
    };
    setData((prevData) => [...prevData, newItem]);
  }, []);

  const select = useCallback((id) => {
    setSelectedId(id);
  }, []);

  const filteredData = data.filter(item => 
    item.name.toLowerCase().includes(criteria.toLowerCase())
  );

  return (
  <SafeAreaView style={styles.safeArea}>
    <Text style={styles.header}>Shopping List</Text>
    <Search criteria={criteria} setCriteria={setCriteria} />
    <Add add={add} />
    <FlatList
      data={filteredData} 
      keyExtractor={(item) => item.id}
      extraData={selectedId}
      renderItem={({ item }) => (
        <Row 
          item={item}
          selectedId={selectedId}
          select={select}
          data={data}
          setData={setData}
        />
      )}
      style={styles.list}
      contentContainerStyle={styles.listContent}
      />
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
    marginLeft: 20,
    marginRight: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%', 
    marginLeft: 20,
    marginRight: 20,
  },
  header: {
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 20,
  },
  list: {
    width: '100%', 
  },
  listContent: {
    paddingHorizontal: 16, 
  },
});