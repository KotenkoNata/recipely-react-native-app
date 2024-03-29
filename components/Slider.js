import {View, StyleSheet} from "react-native";
import {COLORS, height} from "../constants/theme";
import OnboardingData from "../data/onboarding-data";


const Slider = ({currentSlideIndex}) => {

    return (
        <View style={styles.sliderContainer}>
            <View style={styles.sliderList}>
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
    sliderContainer:{
        height: height*0.5,
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    sliderList:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 70
    },
    indicator: {
        height: 10,
        width: 10,
        backgroundColor: COLORS.lightBlue,
        borderRadius: 10/2,
        marginRight: 5,
    }
})