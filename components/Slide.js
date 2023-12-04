import {View} from "react-native";
import {center} from "@shopify/react-native-skia";
import imageSvg from './svg-image/svg-image'

const Slide = ({item}) => {
    return <View style={{alignItems: 'center'}}>
        <imageSvg />
    </View>
}

export default Slide;