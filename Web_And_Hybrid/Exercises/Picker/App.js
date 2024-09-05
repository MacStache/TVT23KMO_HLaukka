import { StyleSheet, View, Platform } from 'react-native';
import AndroidPicker from './components/AndroidPicker';
import IosPicker from './components/IosPicker';
import { useState } from 'react';

export default function App() {
  const [month, setSelectedMonth] = useState(
    String(new Date().getMonth() + 1))
  return (
    <View style={styles.container}>
      { Platform.OS === 'android' &&
      <AndroidPicker month={month} setSelectedMonth={setSelectedMonth} />
      }
      { Platform.OS === 'ios' &&
      <IosPicker month={month} setSelectedMonth={setSelectedMonth} />
      }
    </View>
  );
}

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
