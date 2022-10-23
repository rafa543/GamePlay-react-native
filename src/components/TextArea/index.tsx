import { TextInput, TextInputProps, View } from "react-native";
import { styles } from "./style";

export function TextArea({...rest}: TextInputProps) {
    return (
        <TextInput style={styles.container}{...rest}/>
    )
}