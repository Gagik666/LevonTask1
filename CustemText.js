import { StyleSheet, View, Text} from "react-native";

export const CustemText = ({value, color}) => (
    <View style = {[styles.container, {backgroundColor: color}]}>
        <Text style = {styles.text}>{value}</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        margin: 2,
        paddingVertical: 30,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        align: "center",
        fontSize: 20,
        color: "white",
        fontWeight: "bold"
    }
})