import { StatusBar } from 'expo-status-bar';
import { useState, useRef } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import useAbortableFetch from './hooks/useAbortableFetch'

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

export default function App() {
  const [phrase, setPhrase] = useState('Margarita')
  const urlRef = useRef() 
  const {json, error, loading} = useAbortableFetch(urlRef.current)
  //const controllerRef = useRef()

  const searchCocktails = (text) => {
    setPhrase(text)
    const address = URL + text
    urlRef.current = address

    /*if (controllerRef.current) {
      controllerRef.current.abort()
    }

    controllerRef.current = new AbortController()
    const signal = controllerRef.current.signal

    const address = URL + text
    fetch(address,{signal})
      .then(response => response.json)
      .then(json => {
        console.log(json)
      }).catch(error => {
        console.log(error)
      })*/
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cocktails</Text>
      <TextInput
        placeholder="Search cocktail..."
        value={phrase}
        onChangeText={text => searchCocktails(text)}
      />
      <ScrollView>
        {
          (json !== null && json.drinks !== null) &&
          json.drinks.map(drink => (
            <Text>{drink.strDrink}</Text>
          ))
        }
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 8,
  },
  header: {
    fontSize: 32,
  },
});
