import {Button, Text, View} from "react-native";
import Picture from '../components/svg-image/svg-image';


const Slide = ({item}) => {
    return <View style={{alignItems: 'center'}}>
        <Picture></Picture>
        <Text>{item.title}</Text>
        <Text>{item.subtitle}</Text>
        <Button title={item.buttonName} />
    </View>
}

export default Slide;