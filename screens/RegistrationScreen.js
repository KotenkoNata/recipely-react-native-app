import {SafeAreaView, ScrollView, Text, View, StyleSheet} from "react-native";
import Input from "../components/Input";
import {COLORS} from "../constants/theme";

function RegistrationScreen() {
    return (
        <>
            <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
                <ScrollView contentContainerStyle={{
                    paddingTop: 50,
                    paddingHorizontal: 20
                }}>
                    <Text style={styles.registerTitle}>Register</Text>
                    <View>
                        <Input label='Email Address' iconName='mail-outline' placeholder='Enter Email Address'/>
                        <Input label='Full Name' iconName='person-outline' placeholder='Enter Name'/>
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
        fontSize: 28,
        fontWeight: "600",
        textAlign: 'center',
        marginBottom: 20,
    },
})