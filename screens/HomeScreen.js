import {Text, StyleSheet, View} from "react-native";

function HomeScreen() {
    return <View style={styles.container}>
        <Text>
            Recipely
        </Text>
    </View>
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#70B9BE",
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        fontFamily: 'Roboto_500Medium'
    }
})