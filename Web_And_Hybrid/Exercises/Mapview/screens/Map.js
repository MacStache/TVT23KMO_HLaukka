import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import React from 'react';

export default function Map(props) {

  /*
  useEffect(() => {
    (async () => {
      getUserPosition();
    })();
  }, []); 
  */

  return (
    <MapView
      style={styles.map}
      region={props.location}
    />
  );
}

const styles = StyleSheet.create({
  map: {
    height: '100%',
    width: '100%'
  }
});