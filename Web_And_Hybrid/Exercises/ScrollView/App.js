import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    const testArray = Array();
      for (let i=0; i<=30;i++) {
        testArray.push({id: i,name: 'Test ' + i, image:'https://reactnative.dev/img/tiny_logo.png'});
      }
      setPersons(testArray);
  },[])

  return (
    <View style={styles.container}>
      <ScrollView>
        {
          persons.map((item) => (
            <View style={styles.rowContainer} key={item.id}>
              <Image
                source={{
                  uri: item.image,
                  width: 32,
                  height: 32,
                }}
              />
              <Text style={styles.rowText}>{item.name}</Text>
            </View>
          ))
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingLeft: 8,
    paddingRight: 8
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 5,
    borderColor: '#ccc',
    borderWidth: 1,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5
  },
  image: {
    marginRight: 16
  },
  rowText: {
    fontSize: 16,
    marginLeft: 5,
    padding: 1
  },
});
