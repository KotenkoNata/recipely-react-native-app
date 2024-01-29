import {useFonts, Roboto_500Medium} from "@expo-google-fonts/roboto";
import HomeScreen from "./screens/HomeScreen";
import {NavigationContainer} from '@react-navigation/native'
import {StatusBar} from "expo-status-bar";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import OnboardingScreen from "./screens/OnboardingScreen";
import {useEffect, useState} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from "./screens/LoginScreen";
import RegistrationScreen from "./screens/RegistrationScreen";

const Stack = createNativeStackNavigator();


export default function App() {
    const [isAppFirstLaunched, setIsAppFirstLaunched] = useState(null);

    useEffect( () => {
        async function synchronize(){
            const appData = await AsyncStorage.getItem('isAppFirstLaunched');
            if(appData === null){
                setIsAppFirstLaunched(true)
                await AsyncStorage.setItem('isAppFirstLaunched', 'false');
            }else{
                setIsAppFirstLaunched(false)
            }
        }
        synchronize();
    }, []);

 let [fontsLoaded] = useFonts({
   Roboto_500Medium,
 })
    if (!fontsLoaded) {
        return null;
    }

  return (
      isAppFirstLaunched !== null && (
          <>
              <StatusBar style={'light'}/>
              <NavigationContainer>
                  <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={OnboardingScreen}>
                      {isAppFirstLaunched && (
                          <Stack.Screen name='OnboardingScreen' component={OnboardingScreen} />
                      )}
                      <Stack.Screen name='RegistrationScreen' component={RegistrationScreen} />
                      <Stack.Screen name='LoginScreen' component={LoginScreen} />
                      {/*<Stack.Screen name='HomeScreen' component={HomeScreen} />*/}
                  </Stack.Navigator>
              </NavigationContainer>
          </>
      )
  );
}

