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
      <HomeScreen />
  );
}

