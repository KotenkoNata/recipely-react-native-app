import {FlatList, SafeAreaView,StyleSheet} from "react-native";
import OnboardingData from "../data/onboarding-data";
import Slide from "../components/Slide";
import {width} from "../constants/theme";
import {useState} from "react";
import React from "react";


const OnboardingScreen = ({navigation}) => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const ref = React.useRef(null);
    const updateCurrentSlideIndex = (e)=>{
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX/width);
        setCurrentSlideIndex(currentIndex);

    }

    const goNextSlide = () => {
        const nextSlideIndex = currentSlideIndex + 1;
        if(nextSlideIndex !== OnboardingData.length){
            const offset = nextSlideIndex*width;
            ref?.current?.scrollToOffset({offset});
            setCurrentSlideIndex(nextSlideIndex);
        }
    }

    function handleSkipPress() {
        const lastSlideIndex = OnboardingData.length -1;
        const offset = lastSlideIndex*width;
        ref?.current?.scrollToOffset({offset});
        setCurrentSlideIndex(lastSlideIndex);
    }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList data={OnboardingData}
                      ref = {ref}
                      pagingEnabled={true}
                      onMomentumScrollEnd={updateCurrentSlideIndex}
                      horizontal={true}
                      showsHorizontalScrollIndicator={false}
                      renderItem={({item})=><Slide item={item}
                                                   currentSlideIndex={currentSlideIndex}
                                                   handleSkipPress={handleSkipPress}
                                                   goNextSlide={goNextSlide}/>}
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