import {Pressable, StyleSheet} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const BackButton = ({iconName, onPress}) => {
    return (
        <Pressable onPress={onPress} style={{flex: 1}}>
            <Icon style={styles.backBtnIcon} name={iconName}></Icon>
        </Pressable>
    )
}

export default BackButton;

const styles = StyleSheet.create({
    backBtnIcon:{
        fontSize: 26,
    }
})

