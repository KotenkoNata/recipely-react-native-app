import {Pressable, StyleSheet, Text} from "react-native";
import {COLORS} from "../constants/theme";

const OnBoardingButton = ({name, onPress}) =>{
    return <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{name}</Text>
    </Pressable>
}

export default OnBoardingButton;

const styles=StyleSheet.create({
    button: {
        backgroundColor: COLORS.black,
        marginTop: 40,
        borderRadius: 14,
        padding: 15,
        width: '100%'
    },
    text: {
        fontSize: 20,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
        textAlign: 'center',
    }
})