import { ActivityIndicator, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState, useEffect } from 'react';
import { API_KEY } from '@env';
import CurrencySelector from './components/CurrencySelector';

const BASE_URL = 'https://api.freecurrencyapi.com/v1/latest'
const BASE_CURRENCY = 'EUR'

export default function App() {
  const [eur, setEur] = useState('')
  const [rates, setRates] = useState([])
  const [rate, setRate] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  const result = eur * rate;

  useEffect(() => {
    const address = `${BASE_URL}?base_currency=${BASE_CURRENCY}&apikey=${API_KEY}`
    fetch(address)
      .then(response => response.json())
      .then((result) => {
        const json = result.data
        setRates(jsonToRatesArray(json))
        setRate(json.GBP)
      }).catch((error) => {
        setError(error)
        setRate(0)
      })
      setIsLoading(false)
  }, [])

  const jsonToRatesArray = (json) => {
    return [
      {key:'GBP', label: 'Pounds', value: json.GBP},
      {key:'SEK', label: 'Swedish crown', value: json.SEK},
      {key:'NOK', label: 'Norwegian crown', value: json.NOK},
      {key:'USD', label: 'US dollars', value: json.USD}
    ]
  }

  if (isLoading) return <View style={styles.container}><ActivityIndicator size='large' /></View>
  else if (error) return <View style={styles.container}><Text>{error.message}</Text></View>
  else {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Currency Converter</Text>
        <Text style={styles.field}>EUR</Text>
        <TextInput
          style={styles.field}
          inputMode='decimal-pad'
          value={eur}
          onChangeText={text => setEur(text)}
          placeholder='amount of euros'
        />
        <CurrencySelector values={rates} selected={rate} onValueChange={setRate} />
        <Text style={styles.field}>{result.toFixed(2)}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 40,
    alignItems: 'flex-start',
  },
  heading: {
    width: '100%',
    textAlign:'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  field: {
    marginLeft: 16,
    marginBottom: 8,
  }
});
