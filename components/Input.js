import {Text, View, StyleSheet, TextInput} from "react-native";
import {COLORS} from "../constants/theme"
import Icon from 'react-native-vector-icons/MaterialIcons'

const Input = ({label, iconName, error, password, onFocus = () =>{}, ...props}) => {
    return <View>
        <Text style={styles.inputLabel}>{label}</Text>
        <View style={[styles.inputContainer]}>
            <Icon style={styles.inputIcon} name={iconName}></Icon>
            <TextInput autoCorrect={false}
                       onFocus={()=>{
                           onFocus();
                       }}
                       style={styles.inputText} {...props} />
        </View>
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
    }
})