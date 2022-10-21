import {useState} from 'react'
import { View, Text } from "react-native";
import { Background } from "../../components/Background";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { Profile } from "../../components/Profile";  
import { ListHeader } from "../../components/ListHeader";  
import { styles } from "./style";
import { FlatList } from 'react-native-gesture-handler';

export function Home() {
    const [category , setCategory] = useState('')

    const appointments = [
        {
            id: '1',
            guild: {
                id:'1',
                name: 'Lendarios',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 as 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
        }
    ]

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId)
    }

    return (
        <Background>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd />
            </View>

            <View>
                <CategorySelect
                    categorySelected={category}
                    setCategory={handleCategorySelect}
                />
                <View style={styles.content}>
                    <ListHeader title='Partidas agendadas' subtitle='Total 6'/>
                    <FlatList 
                        data={appointments}
                        keyExtractor={item => item.id}
                        renderItem={({item}) => (
                            <Text>{item.guild.name}</Text>
                        )}
                    />
                </View>
            </View>

        </Background>
    )
} 