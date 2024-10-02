import React from 'react'
import {StyleSheet} from 'react-native'
import {Picker} from '@react-native-picker/picker'

export default function CurrencySelector({values,selected,onValueChange}) {
  return (
    <Picker 
      style={styles.picker}
      onValueChange={(itemValue) => onValueChange(itemValue)}
      selectedValue={selected}
    >
      {values.map((currency) => (
        <Picker.Item 
          key={currency.key} 
          label={currency.label} 
          value={currency.value}
        />
      ))}
    </Picker>
  )
}

const styles = StyleSheet.create({
  picker: {
    width: '100%',
  }
})