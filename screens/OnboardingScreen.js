import {Dimensions, FlatList, SafeAreaView} from "react-native";
import OnboardingData from "../data/onboarding-data";
import Slide from "../components/Slide";

const OnboardingScreen = ({navigation}) => {
    const {width, height} = Dimensions.get('window');
    console.log(`width, height`,width, height)
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#3CA0A7'}}>
            <FlatList pagingEnabled
                      horizontal
                        data={OnboardingData}
                      renderItem={({item})=><Slide item={item}/>}
                      showsHorizontalScrollIndicator={false}
            />
        </SafeAreaView>
    )
}

export default OnboardingScreen;