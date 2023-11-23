import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useFonts, Roboto_500Medium} from "@expo-google-fonts/roboto";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
 let [fontsLoaded] = useFonts({
   Roboto_500Medium,
 })

    if (!fontsLoaded) {
        return null;
    }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Open up App.js to start working on your app!</Text>
      <StatusBar style="black" />
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
  text:{
    fontFamily: 'Roboto_500Medium',
      fontSize: 20,
  }
});
