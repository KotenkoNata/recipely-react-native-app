import {FlatList, SafeAreaView,StyleSheet} from "react-native";
import OnboardingData from "../data/onboarding-data";
import Slide from "../components/Slide";
import {height} from "../constants/theme";


const OnboardingScreen = ({navigation}) => {
    const updateCurrentSlideIndex = (e)=>{
        const contentOffsetX = e.nativeEvent.contentOffset.x;

    }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList data={OnboardingData}
                      pagingEnabled={true}
                      onMomentumScrollEnd={updateCurrentSlideIndex}
                      horizontal={true}
                      showsHorizontalScrollIndicator={false}
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