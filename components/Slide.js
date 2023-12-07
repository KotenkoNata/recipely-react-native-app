import {Text, View, StyleSheet, Image} from "react-native";

import SkipButton from "./SkipButton";
import OnBoardingButton from "./OnBoardingButton";



const Slide = ({item}) => {
    return <View style={styles.container}>
                <View style={{flex: 6, paddingTop: 50}}>
                    <SkipButton name={'Skip'}/>
                    <Image source={item.image} />
                </View>

                <View style={styles.textPartContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.description}>{item.subtitle}</Text>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <OnBoardingButton name={'Next'}/>
                    </View>

                </View>
    </View>
}

export default Slide;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#70b9be',
    },
    textPartContainer: {
        backgroundColor: 'white',
        flex: 3,
        paddingTop: 30,
    },
    title: {
        fontSize: 26,
        color: "#020319",
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    description: {
        color: "#97a2b0",
        fontSize: 20,
        lineHeight: 25,
        textAlign: 'center',
        marginBottom: 40,
    }

})
