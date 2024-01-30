import {Text, View, StyleSheet, TextInput} from "react-native";
import {COLORS} from "../constants/theme"
import Icon from 'react-native-vector-icons/MaterialIcons'
import {useState} from "react";

const Input = ({label, iconName, error, password, onFocus = () =>{}, ...props}) => {
    const [isFocused, setIsFocused] = useState(false);
    const [hidePassword, setHidePassword] = useState(password);
    return <View>
        <Text style={styles.inputLabel}>{label}</Text>
        <View style={[styles.inputContainer, {borderColor: error
                ? 'red'
                : isFocused
                    ? COLORS.lightBlue
                    : COLORS.grayBorders}]}>
            <Icon style={styles.inputIcon} name={iconName}></Icon>
            <TextInput autoCorrect={false}
                       secureTextEntry={hidePassword}
                       onFocus={()=>{
                           onFocus();
                           setIsFocused(true);
                       }}
                       onBlur={()=>{
                           setIsFocused(false);
                       }}
                       style={styles.inputText} {...props} />
            {password && (
                <Icon
                    onPress={()=>{
                        setHidePassword(!hidePassword);
                    }}
                    style={styles.passwordIcon}
                    name={hidePassword ? 'visibility' : 'visibility-off'}/>
            )}
        </View>
        {error && (
            <Text style={styles.errorMessage}>{error}</Text>
        )}
    </View>
}

export default Input;

const styles = StyleSheet.create({
    inputLabel: {
        fontSize: 16,
        fontWeight: "600",
        marginBottom: 15,

    },
    inputContainer:{
        height: 55,
        backgroundColor: COLORS.white,
        flexDirection: 'row',
        paddingHorizontal: 15,
        borderWidth: 0.5,
        borderRadius: 15,
        borderColor: COLORS.grayBorders,
        alignItems: 'center',
        marginBottom: 20,
    },
    inputIcon: {
        fontSize: 22,
        color: COLORS.black,
        marginRight: 10
    },
    inputText: {
        color: COLORS.placeholderGray,
        flex: 1,
    },
    errorMessage: {
        color: 'red',
        fontSize: 12,
        marginTop: 7
    },
    passwordIcon:{
        fontSize: 20,
        color: COLORS.grayInput,
    }
})