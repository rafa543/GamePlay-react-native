import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Guild, GuildProps } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";
import { styles } from "./style";

type Props = {
    handleGuildSelect: (guild: GuildProps) => void
}

export function Guilds({handleGuildSelect}: Props) {
    const guilds = [
        {
            id: '1',
            name: 'Lendarios',
            icon: 'image.png',
            owner: true
        },
        {
            id: '2',
            name: 'Lendarios gdsf',
            icon: 'image.png',
            owner: true
        },
    ]

    return (
        <View style={styles.container}>
            <FlatList
                data={guilds}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <Guild data={item} onPress={() => handleGuildSelect(item)}/>
                )}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => <ListDivider/>}
                style={styles.guilds}
            />
        </View>
    )
}