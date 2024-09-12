import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import Homescreen from './screens/Homescreen';
import Secondscreen from './screens/Secondscreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainAppbar from './components/MainAppbar';

export default function App() {
  const Stack = createNativeStackNavigator()

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName='Homescreen'
          screenOptions={{
            header: (props) => <MainAppbar {...props} title='Homescreen' />,
          }}
        >
          <Stack.Screen
            name='Home'
            component={Homescreen}
            options={{
              headerShown: true,
            }}
          />
          <Stack.Screen
            name='Second'
            component={Secondscreen}
            options={{
              headerShown: true,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
    );
  }
