import React from "react"
import {
    // StyleSheet,
    View,
    Text,
    Touchable,
    TouchableOpacity,
} from "react-native"

function Task(props) {
    return (
        <View className="mb-3 p-4 rounded-lg flex flex-row items-center justify-between bg-neutral-900">
            <View className="flex flex-row">
                <TouchableOpacity className="w-6 h-6 rounded-md bg-neutral-600 opacity-50" />
                <Text className="w-52 text-base text-green-700 mx-3">
                    {props.text}
                </Text>
            </View>
            <View className="h-4 w-4 border-2 rounded-full border-neutral-600 opacity-50"></View>
        </View>
    )
}

// const styles = StyleSheet.create({
//     task: {
//         backgroundColor: "#111",
//         marginBottom: 10,
//         padding: 15,
//         borderRadius: 10,
//         flexDirection: "row",
//         alignItems: "center",
//         justifyContent: "space-between",
//     },
//     taskLeft: {
//         flexDirection: "row",
//         flexWrap: "wrap",
//     },
//     taskText: {
//         color: "green",
//         marginHorizontal: 10,
//         fontSize: 15,
//         maxWidth: "80%",
//     },
//     square: {
//         width: 24,
//         height: 24,
//         borderRadius: 5,
//         backgroundColor: "#444",
//         opacity: 0.5,
//     },
//     circular: {
//         width: 15,
//         height: 15,
//         borderColor: "#444",
//         borderWidth: 2,
//         borderRadius: 7,
//     },
// })
export default Task
