import { View, Text, Image, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { API_KEY } from '@env';

const api = {
  url: 'https://api.openweathermap.org/data/2.5/weather?',
  key: API_KEY,
  icons: 'http://openweathermap.org/img/wn/'
}

export default function Weather(props) {
  const [temp, setTemp] = useState(0)
  const [description, setDescription] = useState('')
  const [icon, setIcon] = useState('')

  useEffect(() => {
    const url = api.url +
    'lat=' + props.latitude +
    '&lon=' + props.longitude +
    '&units=metric' +
    '&appid=' + api.key

    fetch(url)
      .then(res => res.json())
      .then((json) => {
        console.log(json)
        setTemp(json.main.temp)
        setDescription(json.weather[0].description)
        setIcon(api.icons + json.weather[0].icon + '@2x.png')
      })
      .catch((error) => {
        setDescription('Error retrieving weather information.')
        console.log(error)
      })
  }, [])

  return (
    <View>
      <Text style={styles.temp}>{temp}°C</Text>
      {icon &&
        <Image source={{uri: icon}} style={{width: 100, height: 100}} />
      }
      <Text>{description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  temp: {
    fontSize: 18,
    marginBottom: 10,
  },

});