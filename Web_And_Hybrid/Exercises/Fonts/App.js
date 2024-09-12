import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font'

export default function App() {
  const [loaded] = useFonts({
    SuseVariable: require('./assets/fonts/SUSE.ttf')
  });

  if (!loaded) {
    return null;
  }

  return ( 
    <View style={styles.container}>
      <Text style={styles.heading}>My heading</Text>
      <Text>This is a text field. Nice looking font!</Text>
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
  heading: {
    fontFamily: 'SuseVariable',
    fontSize: 20,
  }
});
