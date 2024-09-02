import React, {useState, useEffect} from 'react';
import { StyleSheet, ActivityIndicator, View } from 'react-native';

export default function App() {
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
    }, 3000)
  }, [])

  return (
    <View style={styles.container}>
      {isLoading &&
        <ActivityIndicator size="large" animating={true} /> 
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
});
