import { LinearGradient } from "expo-linear-gradient";
import { Text, View, Image } from "react-native";
import { theme } from "../../global/styles/themes";
import { styles } from "./style";

type Props = {
    urlImage: string
}

export function Avatar({urlImage}: Props) {
    const { secondary50, secondary70 } = theme.colors

    return (
        <LinearGradient style={styles.container} colors={[secondary50, secondary70]}>
            <Image source={{uri: urlImage}} style={styles.avatar}/>
        </LinearGradient>
    )
}