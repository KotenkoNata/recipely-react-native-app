import {FlatList, SafeAreaView} from "react-native";
import OnboardingData from "../data/onboarding-data";
import Slide from "../components/Slide";

const OnboardingScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#3CA0A7'}}>
            <FlatList data={OnboardingData}
                      renderItem={({item})=><Slide item={item}/>}
                      showsHorizontalScrollIndicator={false}
            />
        </SafeAreaView>
    )
}

export default OnboardingScreen;