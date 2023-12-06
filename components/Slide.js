import {Button, Text, View,StyleSheet} from "react-native";
import Picture from '../components/svg-image/svg-image';
import SkipButton from "./SkipButton";



const Slide = ({item}) => {
    return <View style={styles.container}>
                <View style={{flex: 3, justifyContent: 'center'}}>
                    <SkipButton name={'Skip'}/>
                    <Picture></Picture>
                </View>

                <View style={styles.textPartContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.description}>{item.subtitle}</Text>
                    <Button title={item.buttonName} />
                </View>
    </View>
}

export default Slide;

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#70b9be',
    },
    textPartContainer: {
        backgroundColor: 'white',
        padding: 30,
        justifyContent: "center",
        alignItems: 'center',
        flex: 1
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
        width: '70%',
        textAlign: 'center',
    }

})
