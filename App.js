import {useFonts, Roboto_500Medium} from "@expo-google-fonts/roboto";
import HomeScreen from "./screens/HomeScreen";
import {NavigationContainer} from '@react-navigation/native'
import {StatusBar} from "expo-status-bar";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import OnboardingScreen from "./screens/OnboardingScreen";

const Stack = createNativeStackNavigator();


export default function App() {
 let [fontsLoaded] = useFonts({
   Roboto_500Medium,
 })
    if (!fontsLoaded) {
        return null;
    }

  return (<>
      <StatusBar style={'light'}/>
      <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
              <Stack.Screen name='HomeScreen' component={HomeScreen} />
              <Stack.Screen name='OnboardingScreen' component={OnboardingScreen} />
          </Stack.Navigator>
      </NavigationContainer>
      </>
  );
}

