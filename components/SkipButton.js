import {Pressable, Text,StyleSheet} from "react-native";

const SkipButton = ({name, onPress}) => {
  return (
      <Pressable style={styles.button} onPress={onPress}>
          <Text style={styles.text}>{name}</Text>
      </Pressable>
  )
}

export default SkipButton;

const styles=StyleSheet.create({
    button: {
        marginTop: 40,
        marginRight: 30,
        alignItems: "flex-end",
    },
    text: {
        fontSize: 20,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    }
})