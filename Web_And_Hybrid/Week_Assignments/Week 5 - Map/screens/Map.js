import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import React from 'react';

export default function Map(props) {
  const showMarker = (e) => {
    const coords = e.nativeEvent.coordinate;
    props.addMarker(coords);
  };

  return (
    <MapView
      style={styles.map}
      region={props.location}
      mapType={props.mapType}
      onLongPress={showMarker}
    >
      {props.markers.map((marker, index) => (
        <Marker
          key={index}
          title='My Marker'
          coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
        />
      ))}
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    height: '100%',
    width: '100%'
  }
});