import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Background } from "../../components/Background";
import { ButtonAdd } from "../../components/ButtonAdd";
import { Profile } from "../../components/Profile";
import { styles } from "./style";

import { categories } from "../../utils/categories";
import { Category } from "../Category";

type Props = {
    categorySelected: string
    setCategory: (categoryId: string) => void
}

export function CategorySelect({categorySelected, setCategory}: Props) {
    return (
        <ScrollView
            horizontal
            style={styles.container}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 40 }}
        >
            {
                categories.map(category => (
                    <Category 
                        key={category.id} 
                        title={category.title} 
                        icon={category.icon} 
                        checked={category.id === categorySelected}
                        onPress={() => setCategory(category.id)}
                    />
                ))
            }
        </ScrollView>
    )
} 