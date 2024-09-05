import React from "react";
import RNPickerSelect from 'react-native-picker-select';
import { StyleSheet } from "react-native";
import months from './months';

export default function IosPicker({month, setSelectedMonth}) {
    return (
        <RNPickerSelect
        style={styles}
        value={month}
        onValueChange={(value) => setSelectedMonth(value)}
        items={months}
        >

        </RNPickerSelect>
    )
}

const styles = StyleSheet.create({
  inputIOS: {
    width: '100%',
    marginLeft: 16,
    fontSize: 16,
  }
});