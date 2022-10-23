import React, { useState } from 'react'
import { Text, View, TextInput, Image } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import { styles } from './style'
import IlustrationImg from '../../assets/illustration.png'
import { ButtonIcon } from '../../components/ButtonIcon'
import { Background } from '../../components/Background'

export function SignIn() {
    const navigation = useNavigation()

    function handleSign() {
        navigation.navigate('Home')
    }

    return (
        <Background>
        <View style={styles.container}>
            
            <Image 
                source={IlustrationImg} 
                resizeMode="stretch"
                style={styles.image}
            />

            <View style={styles.content}>
                <Text style={styles.title}>
                    Conecte-se{'\n'} e organize suas{'\n'} jogatinas
                </Text>
                <Text style={styles.subtitle}>
                    Crie grupos para jogar seus games {'\n'} favoritos com seus amigos
                </Text>

                <ButtonIcon 
                    title='Entrar com discord'
                    onPress={handleSign}
                />
            </View>

        </View>
        </Background>
    )
}