import {SafeAreaView, ScrollView, Text, View, StyleSheet} from "react-native";
import Input from "../components/Input";
import {COLORS} from "../constants/theme";
import {setStatusBarStyle} from "expo-status-bar";
import OnBoardingButton from "../components/OnBoardingButton";
import BackButton from "../components/BackButton";

function RegistrationScreen() {
    setStatusBarStyle('dark');
    return (
        <>
            <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
                <ScrollView contentContainerStyle={{
                    paddingTop: 50,
                    paddingHorizontal: 20
                }}>
                    <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
                        <BackButton iconName='arrow-back'/>
                        <Text style={styles.registerTitle}>Create Account</Text>
                    </View>
                    <View>
                        <Input label='User Name' iconName='person-outline' placeholder='User Name'/>
                        <Input label='Full Name' iconName='person-outline' placeholder='Enter Name'/>
                        <Input label='Email Address' iconName='mail-outline' placeholder='Enter Email Address'/>
                        <Input label='Phone Number' iconName='phone' placeholder='Enter Phone number'/>
                        <Input label='Password'
                               iconName='lock-outline'
                               password
                               placeholder='Enter Password'/>
                        <OnBoardingButton name={'Continue'} addStyle={{marginTop: 15}}/>
                        <Text style={styles.inputText}>By continuing, you agree to the</Text>
                        <Text style={[styles.inputTermsText]}>
                            Terms of Services & Privacy Policy
                        </Text>
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
        marginBottom: 20,
        flex: 3,
    },
    inputText: {
        textAlign: 'center',
        marginTop: 20,
    },
    inputTermsText: {
        fontWeight: 'bold',
        textAlign: 'center'
    },
})