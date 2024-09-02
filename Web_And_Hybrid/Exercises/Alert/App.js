import React, {useState} from 'react';
import { StyleSheet, View, Alert, Text, Button } from 'react-native';

export default function App() {
  const [ok, setOk] = useState(false);

  const showAlert = () => {
    Alert.alert(
      "ALERT",
      "This is a message. Thank you for your time.",
    [
      {
        text: "Ok",
        onPress: () => setOk(true)
      },
      {
        text: "Cancel",
        onPress: () => setOk(false)
      }
    ]
    );
  }

  return (
    <View style={styles.container}>
      <Button title={'Open dialog'} onPress={showAlert}></Button>
      <Text>{ok===true ? 'ok' : 'cancel'}</Text>
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
