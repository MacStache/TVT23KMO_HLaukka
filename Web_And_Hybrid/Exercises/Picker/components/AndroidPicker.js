import { Picker } from "@react-native-picker/picker";
import { StyleSheet } from "react-native";
import React from "react";
import months from './months';

const AndroidPicker = ({ months, setSelectedMonth }) => {
  return (
    <Picker
      style={styles.picker}
      selectedValue={months}
      onValueChange={(itemValue, itemIndex) =>
        setSelectedMonth(itemValue)
      }
    >
      {months.map(item => (
        <Picker.Item style={styles.item} key={item.value} value={item.value} label={item.label} />
      ))}
    </Picker>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  picker: {
    width: '100%'
  },
  item: {
    fontSize: 16
  }
});

export default AndroidPicker;