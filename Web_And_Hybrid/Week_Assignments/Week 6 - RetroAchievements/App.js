import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Header from './components/Header';
import Search from './components/Search';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Search />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#1a1a1a',
    color: '#cc9090',
    padding: 20,
  },
});
