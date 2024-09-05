import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import DateTimePicker from 'react-native-ui-datepicker';
import dayjs from 'dayjs'

export default function App() {
  const [date, setDate] = useState(dayjs())
  const [show, setShow] = useState(false)

  const pickDate = () => {
    setShow(true)
  }

  const selectDate = (value) => {
    setDate(value.date)
    setShow(false)
  }

  const DisplayDate = () => {
    return (
      <Text>{dayjs(date).locale('fi').format('DD.MM.YYYY')}</Text>
    )
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={pickDate}>
        <DisplayDate />
      </Pressable>
      {show && (
      <DateTimePicker
        value={date}
        onChange={(date) => selectDate(date)}
      />
      )}
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
});
