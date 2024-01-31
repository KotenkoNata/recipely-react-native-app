import {Pressable, StyleSheet, Text, TouchableOpacity} from "react-native";
import {COLORS} from "../constants/theme";

const OnBoardingButton = ({name, onPress, addStyle}) =>{
    return <TouchableOpacity activeOpacity={0.7} style={[styles.button, addStyle]} onPress={onPress}>
        <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
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