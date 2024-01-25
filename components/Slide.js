import {Text, View, StyleSheet, Image} from "react-native";
import SkipButton from "./SkipButton";
import OnBoardingButton from "./OnBoardingButton";
import {COLORS, width} from "../constants/theme";
import Slider from "./Slider";


const Slide = ({item, currentSlideIndex, goNextSlide, handleSkipPress}) => {

    return <View style={styles.container}>
                <View style={styles.topPartContainer}>
                    <SkipButton style={styles.skipButton} name={'Skip'} onPress={handleSkipPress}/>
                    <Image style={styles.imageStyles}
                           resizeMode={"contain"}
                           source={item.image} />
                    <Slider currentSlideIndex={currentSlideIndex}/>
                </View>

                <View style={styles.bottomPartContainer}>
                    <Text style={styles.titleOnBoardCard}>{item.title}</Text>
                    <Text style={styles.descriptionOnBoardCard} adjustsFontSizeToFit={true}>{item.subtitle}</Text>
                    <View style={styles.buttonContainer}>
                        <OnBoardingButton name={'Next'} onPress={goNextSlide}/>
                    </View>
                </View>
    </View>
}

export default Slide;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: COLORS.lightBackground,
        flex: 1,
        padding: 15,
        paddingBottom: 0
    },
    topPartContainer: {
        backgroundColor: COLORS.lightBackground,
        flex: 3,
    },
    skipButton:{

    },
    imageStyles: {
        width: width-30,
        height: 400,
        marginTop: 60,
    },
    bottomPartContainer: {
        backgroundColor: COLORS.white,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: width-30,
        paddingLeft: 20,
        paddingRight: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingBottom: 25,
    },
    titleOnBoardCard: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 24,
        color: COLORS.black,
        marginTop: 20,
        fontFamily: 'Roboto_500Medium',
        marginBottom: 15,
    },
    descriptionOnBoardCard: {
        textAlign: 'center',
        color: COLORS.gray,
        fontSize: 18,
        lineHeight: 30
    },
    buttonContainer: {
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        width: width - 60,
    },
})
