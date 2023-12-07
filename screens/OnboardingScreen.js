import {Dimensions, FlatList, SafeAreaView,StyleSheet} from "react-native";
import OnboardingData from "../data/onboarding-data";
import Slide from "../components/Slide";

const OnboardingScreen = ({navigation}) => {
    const {width, height} = Dimensions.get('window');

    return (
        <SafeAreaView style={styles.container}>
            <FlatList pagingEnabled
                      horizontal
                        data={OnboardingData}
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