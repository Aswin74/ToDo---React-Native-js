import React from "react";
import {
    StyleSheet,
    View,
    Text,
    Touchable,
    TouchableOpacity,
} from "react-native";

function Task(props) {
    return (
        <View style={styles.task}>
            <View style={styles.taskLeft}>
                <TouchableOpacity style={styles.square} />
                <Text style={styles.taskText}>{props.text}</Text>
            </View>

            <View style={styles.circular}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    task: {
        backgroundColor: "#111",
        marginBottom: 10,
        padding: 15,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    taskLeft: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    taskText: {
        color: "green",
        marginHorizontal: 10,
        fontSize: 15,
        maxWidth: "80%",
    },
    square: {
        width: 24,
        height: 24,
        borderRadius: 5,
        backgroundColor: "#444",
        opacity: 0.5,
    },
    circular: {
        width: 15,
        height: 15,
        borderColor: "#444",
        borderWidth: 2,
        borderRadius: 7,
    },
});
export default Task;
