import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState, useEffect } from 'react';
import * as ScreenOrientation from 'expo-screen-orientation'

export default function App() {
  const [screenOrientation, setScreenOrientation] = useState('portrait')
  const [isPortrait, setIsPortrait] = useState(true)
  const [isLocked, setIsLocked] = useState(false)

  useEffect(() => {
    const subscription = ScreenOrientation.addOrientationChangeListener((value) => {
    if (value.orientationInfo.orientation === ScreenOrientation.Orientation.PORTRAIT_UP) {
      setScreenOrientation("portrait");
      setIsPortrait(true);
    } else if (value.orientationInfo.orientation === ScreenOrientation.Orientation.LANDSCAPE_RIGHT) {
      setScreenOrientation("landscape");
      setIsPortrait(false);
    }
    });
    return () => {
      ScreenOrientation.removeOrientationChangeListener(subscription);
    };
  
  }, []);

  const lockToPortrait = async () => {
    if (!isLocked) {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT)
      setIsLocked(true)
    } else {
      await ScreenOrientation.unlockAsync(ScreenOrientation.OrientationLock.PORTRAIT)
      setIsLocked(false)
    }
  }

  const lockToLandscape = async () => {
    if (!isLocked) {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE)
      setIsLocked(true)
    } else {
      await ScreenOrientation.unlockAsync(ScreenOrientation.OrientationLock.LANDSCAPE)
      setIsLocked(false)
    }
  }

  const getButtonTitle = () => {
    if (isPortrait) {
      return isLocked ? "Release lock" : "Lock to portrait";
    } else {
      return isLocked ? "Release lock" : "Lock to landscape";
    }
  }

  const getButtonHandler = () => {
    if (isPortrait) {
      return lockToPortrait;
    } else {
      return lockToLandscape;
    }
  }
 
  return (
    <View style={[styles.container, isPortrait ? styles.portrait : styles.landscape]}>
      <Text>{screenOrientation}</Text>
      <Text>This content is only for {isPortrait ? "portrait" : "landscape"} orientation</Text>
      <Button onPress={getButtonHandler()} title={getButtonTitle()} />
      
      {/* THIS IS VERSION 1. I UPGRADED FROM HERE TO A SIMPLER FUNCTION
        I decided to try and simplify this so I made the getButtonTitle and getButtonHandler functions.
        I did not need to do it for this exercize, but I wanted to just to learn to use the handlers.
      
      {(() => {
        if (isPortrait && !isLocked) {
          return <Text>This content is only for portrait orientation</Text>
          && <Button onPress={lockToPortrait} title="Lock to portrait" />
        } else if (isPortrait && isLocked) {
          return <Text>This content is only for portrait orientation</Text>
          && <Button onPress={lockToPortrait} title="Release lock" /> 
        } else if (!isPortrait && isLocked) {
          return <Text>This content is only for landscape orientation</Text>
          && <Button onPress={lockToLandscape} title="Release lock" />
        } else {
          return <Text>This content is only for landscape orientation</Text>
          && <Button onPress={lockToLandscape} title="Lock to landscape" />
        }
      })()}
      */}
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
  portrait: {
    backgroundColor: '#ccc',
  },
  landscape: {
    backgroundColor: '#999',
  }
});
