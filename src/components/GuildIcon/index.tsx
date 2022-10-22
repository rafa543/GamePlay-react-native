import { Image, View } from "react-native";
import { styles } from "./style";

export function GuildIcon() {
    const uri = 'https://logodownload.org/wp-content/uploads/2017/11/discord-logo-0-2048x2048.png'
    // https://w7.pngwing.com/pngs/942/98/png-transparent-discord-computer-icons-teamspeak-computer-servers-others-miscellaneous-blue-smiley.png

    return (
        <Image source={{uri}} style={styles.image} resizeMode="cover"/>
    )
} 