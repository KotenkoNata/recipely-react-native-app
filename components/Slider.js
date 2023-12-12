import {View, StyleSheet} from "react-native";
import {COLORS, height} from "../constants/theme";
import OnboardingData from "../data/onboarding-data";
import {useState} from "react";

const Slider = () => {

    const [currentSlideIndex, setCurrentIndex] = useState(0);

    return (
        <View style={{height: height*0.5, justifyContent: 'space-between', paddingHorizontal: 20}}>
            <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 70}}>
                {OnboardingData.map((_,index)=>(
                    <View key={index} style={[styles.indicator, currentSlideIndex === index && {
                        backgroundColor: COLORS.white, width: 25
                    }]} />
                ))}
            </View>
        </View>
    )
}

export default Slider;

const styles = StyleSheet.create({
    indicator: {
        height: 10,
        width: 10,
        backgroundColor: COLORS.lightBlue,
        borderRadius: 10/2,
        marginRight: 5,
    }
})