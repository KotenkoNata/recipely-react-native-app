import {SafeAreaView, ScrollView, Text, View, StyleSheet} from "react-native";
import Input from "../components/Input";
import {COLORS} from "../constants/theme";
import {setStatusBarStyle} from "expo-status-bar";
import OnBoardingButton from "../components/OnBoardingButton";

function RegistrationScreen() {
    setStatusBarStyle('dark');
    return (
        <>
            <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
                <ScrollView contentContainerStyle={{
                    paddingTop: 50,
                    paddingHorizontal: 20
                }}>
                    <Text style={styles.registerTitle}>Create Account</Text>
                    <View>
                        <Input label='User Name' iconName='person-outline' placeholder='User Name'/>
                        <Input label='Full Name' iconName='person-outline' placeholder='Enter Name'/>
                        <Input label='Email Address' iconName='mail-outline' placeholder='Enter Email Address'/>
                        <Input label='Phone Number' iconName='phone' placeholder='Enter Phone number'/>
                        <Input label='Password' iconName='lock-outline' placeholder='Enter Password'/>
                        <OnBoardingButton name={'Continue'} />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default RegistrationScreen;

const styles = StyleSheet.create({
    registerTitle: {
        color: COLORS.black,
        fontFamily: 'Roboto_500Medium',
        fontSize: 28,
        fontWeight: "600",
        textAlign: 'center',
        marginBottom: 20,
    },
})