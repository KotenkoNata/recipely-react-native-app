import {Pressable, StyleSheet, Text} from "react-native";

const OnBoardingButton = ({name}) =>{
    return <Pressable style={styles.button}>
        <Text style={styles.text}>{name}</Text>
    </Pressable>
}

export default OnBoardingButton;

const styles=StyleSheet.create({
    button: {
        backgroundColor: "#042628",
        marginTop: 40,
        marginRight: 30,
        borderRadius: 14,
        padding: 15,
        width: "75%",
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