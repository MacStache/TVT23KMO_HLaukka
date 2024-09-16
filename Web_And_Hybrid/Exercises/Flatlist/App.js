import { StyleSheet, Text, FlatList, SafeAreaView } from 'react-native';
import uuid from 'react-native-uuid';
import Constants from 'expo-constants';
import Row from './components/Row';
import { useCallback, useState } from 'react';
import Add from './components/Add';

export default function App() {
  const [data, setData] = useState ([]) 

  const add = useCallback((name) => {
    const newItem = {
      id: uuid.v4(),
      name: name
    }
    const tempData= [...data,newItem]
    setData(tempData)
  }, [data])

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Shopping List</Text>
      <Add add={add} />
      <FlatList
        data = {data}
        renderItem={({item}) => (
          <Row item={item} />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
  }
});
