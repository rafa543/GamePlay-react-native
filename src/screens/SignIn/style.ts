import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        marginTop: -40,
        paddingHorizontal: 50
    },
    image: {
        width: '100%',
        height: 360,
    },
    title: {
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 40,
        marginBottom: 16,
        lineHeight: 40
    },
    subtitle: {
        color: theme.colors.heading,
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 64,
        fontFamily: theme.fonts.title500,
        lineHeight: 25
    }
})
