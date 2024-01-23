import {FlatList, SafeAreaView,StyleSheet} from "react-native";
import OnboardingData from "../data/onboarding-data";
import Slide from "../components/Slide";


const OnboardingScreen = ({navigation}) => {
    const updateCurrentSlideIndex = (e)=>{
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX/width);
    }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList data={OnboardingData}
                      onMomentumScrollEnd={updateCurrentSlideIndex}
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