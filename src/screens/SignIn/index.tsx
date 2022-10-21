import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { Text, View, TextInput, Image } from 'react-native'
import { styles } from './style'
import IlustrationImg from '../../assets/illustration.png'
import { ButtonIcon } from '../../components/ButtonIcon'

export function SignIn() {

    return (
        <View style={styles.container}>
            <StatusBar  style='light' backgroundColor='transparent' translucent/>
            <Image 
                source={IlustrationImg} 
                resizeMode="stretch"
                style={styles.image}
            />

            <View style={styles.content}>
                <Text style={styles.title}>
                    Organize{'\n'} suas jogatinas{'\n'} facilmente
                </Text>
                <Text style={styles.subtitle}>
                    Crie grupos para jogar seus games {'\n'} favoritos com seus amigos
                </Text>

                <ButtonIcon 
                    title='Entrar com discord'
                    activeOpacity={0.7}
                />
            </View>

        </View>
    )
}