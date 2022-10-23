import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { GuildIcon } from "../GuildIcon";
import { styles } from "./style";
import {Feather} from '@expo/vector-icons'
import { theme } from "../../global/styles/themes";

export type GuildProps = {
    id: string
    name: string
    icon: string | null
    owner: boolean
}

type Props = TouchableOpacityProps & {
    data: GuildProps
}

export function Guild({data, ...rest}: Props ){
    return (
        <TouchableOpacity
            style={styles.container}
            activeOpacity={0.7}
            {...rest}
        >
            <GuildIcon/>
            <View style={styles.content}>
                <View>
                    <Text style={styles.title}>{data.name}</Text>
                    <Text style={styles.type}>{data.owner ? 'Administrador' : 'Convidado'}</Text>
                </View>
            </View>

            <Feather  size={24} name="chevron-right" color={theme.colors.heading} />

        </TouchableOpacity>
    )
}