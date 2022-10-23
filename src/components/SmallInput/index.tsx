import { TextInput, TextInputProps, View } from "react-native";
import { styles } from "./style";

export function SmallInput({...rest}: TextInputProps) {
    return (
        <TextInput style={styles.container} keyboardType="numeric" {...rest}/>
    )
}