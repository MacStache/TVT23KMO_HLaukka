import { Image, StyleSheet, Text, View } from 'react-native';
import Logo from '../assets/ra-icon.webp'

export default function Header() {
  return (
    <View style={styles.header}>
      <Image style = {styles.logo} source={Logo} />
      <Text style={styles.headerText}>RetroAchievements</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#161616',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 50,
    marginBottom: 10,
    padding: 20,
    width: '100%',
    height: '10%',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#cc9900',
  },
  headerText: {
    fontSize: 25,
    color: '#cc9900',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginLeft: 10,
  },
  text: {
    fontSize: 16,
    color: '#cc9900',
  },
  logo: {
    width: 100,
    height: 50,
    
  },
});