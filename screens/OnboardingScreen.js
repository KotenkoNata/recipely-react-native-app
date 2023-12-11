import {FlatList, SafeAreaView,StyleSheet} from "react-native";
import OnboardingData from "../data/onboarding-data";
import Slide from "../components/Slide";
import {COLORS, height} from "../constants/theme";

const OnboardingScreen = ({navigation}) => {

    return (
        <SafeAreaView style={styles.container}>
            <FlatList data={OnboardingData}
                      horizontal={true}
                      renderItem={({item})=><Slide item={item}/>}
            />
        </SafeAreaView>
    )
}

export default OnboardingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3CA0A7'
    }
})