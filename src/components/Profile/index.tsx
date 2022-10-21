import { Text, View } from "react-native";
import { styles } from "./style";
import {Avatar} from '../Avatar'

export function Profile() {
    return (
        <View style={styles.container}>

            <Avatar urlImage="https://avatars.githubusercontent.com/u/54370234?v=4"/>

            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>Olá</Text>
                    <Text style={styles.userName}>Rafael</Text>
                </View>
                <Text style={styles.message}>Hoje é dia de vitoria</Text>
            </View>
        </View>
    )
}