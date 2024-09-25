import { Platform, SafeAreaView, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import { PaperProvider } from 'react-native-paper';
import Map from './screens/Map';
import MainAppbar from './components/Appbar';
import Settings from './components/Settings';
import * as Location from 'expo-location';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const settings = {
  backgroundColor: '#00a484'
};

const icons = {
  location_not_known: 'crosshairs',
  location_searching: 'crosshairs-question',
  location_found: 'crosshairs-gps'
};

export default function App() {
  const [icon, setIcon] = useState(icons.location_not_known);
  const [location, setLocation] = useState({
    latitude: 65.0800,
    longitude: 25.4800,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  });
  const [mapType, setMapType] = useState('standard');
  const [markers, setMarkers] = useState([]);

  const getUserPosition = async () => {
    setIcon(icons.location_searching);
    let { status } = await Location.requestForegroundPermissionsAsync();

    try {
      if (status !== 'granted') {
        console.log('Geolocation failed');
        setIcon(icons.location_not_known);
        return;
      }

      const position = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.High });
      setLocation(prevLocation => ({
        ...prevLocation,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      }));
      setIcon(icons.location_found);
    } catch (error) {
      console.log(error);
      setIcon(icons.location_not_known);
    }
  };

  const addMarker = (coordinate) => {
    setMarkers([...markers, coordinate]);
  };

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Map'
          screenOptions={{
            header: (props) => (
              <MainAppbar
                {...props}
                backgroundColor={settings.backgroundColor}
                icon={icon}
                getUserPosition={getUserPosition}
              />
            )
          }}
        >
          <Stack.Screen name='Map'>
            {props => (
              <Map
                {...props}
                location={location}
                mapType={mapType}
                markers={markers}
                addMarker={addMarker}
              />
            )}
          </Stack.Screen>
          <Stack.Screen name='Settings' component={Settings} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
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