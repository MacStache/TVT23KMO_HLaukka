import React, { useCallback, useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';
import Constants from 'expo-constants';
import Add from './components/Add';
import Search from './components/Search';
import Header from './components/Header';
import Info from './components/Info';
import TodoList from './components/TodoList';

const STORAGE_KEY = '@todo_list';

export default function App() {
  const [data, setData] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [criteria, setCriteria] = useState('');

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
      name: name,
      taskDone: false,
    };
    setData((prevData) => [...prevData, newItem]);
  }, []);

  const select = useCallback((id) => {
    setSelectedId(id);
  }, []);

  const setTaskDone = useCallback((id) => {
    const updatedData = data.map((item) => {
      if (item.id === id) {
        return { ...item, taskDone: !item.taskDone };
      }
      return item;
    });
    setData(updatedData);
  }, [data]);

  const filteredData = data.filter(item => 
    item.name.toLowerCase().includes(criteria.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
      <Header title="Todo List" />
      <Info infoText="Please type a task and press save to add it to the list. Tap a task to set it done. Tap trash can to remove. Use search function to search tasks." />
      <Search criteria={criteria} setCriteria={setCriteria} />
      <Add add={add} />
      <TodoList 
        data={filteredData}
        selectedId={selectedId}
        select={select}
        setTaskDone={setTaskDone}
        setData={setData}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    marginLeft: 20,
    marginRight: 20,
  },
});