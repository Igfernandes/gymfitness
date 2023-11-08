import { StyleSheet } from "react-native";
import { colors } from "../../../../styles/colors";

export const style = StyleSheet.create({
    group: {
        marginTop: '2%',
        marginBottom: '2%'
    },
    label: {
        color: colors.white.default,
        marginBottom: "2%",
        fontSize: 15
    },
    input: {
        width: "100%",
        color: "#fff",
        fontSize: 15,
        padding: "4%",
        borderWidth: 2,
        borderColor: colors.white[700],
        borderRadius: 10
    }
})