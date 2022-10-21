
import { Image, View, Text, TouchableHighlightProps } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { styles } from './style'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { theme } from '../../global/styles/themes'


export function ButtonAdd({...rest}: RectButtonProps) {
    return (
        <RectButton style={styles.container} {...rest}>
            <MaterialCommunityIcons name="plus" color={theme.colors.heading} size={24} />
        </RectButton>
    )
}