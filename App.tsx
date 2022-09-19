import { StatusBar } from 'expo-status-bar';
import {Image, StyleSheet, Text, useWindowDimensions, View} from 'react-native';

export default function App() {
  const { height, width} = useWindowDimensions();

  return (
    <View style={styles.container}>
      <Image source={require("./screenshots/home-discovery.jpeg")} resizeMode={"contain"} style={{ width, height}}/>
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
