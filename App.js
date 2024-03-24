import { useState } from "react"
import { StatusBar } from "expo-status-bar"
import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    // StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    ScrollView,
} from "react-native"
import Task from "./components/Task"

export default function App() {
    const [task, setTask] = useState()
    const [taskItems, setTaskItems] = useState([])

    const handleAdd = () => {
        setTaskItems([...taskItems, task])
        setTask(null)
    }

    const handleRemove = (index) => {
        tasksCopy = [...taskItems]
        tasksCopy.splice(index, 1)
        setTaskItems(tasksCopy)
    }

    return (
        <View className="container flex-1 bg-neutral-800">
            <View className="px-6 py-20">
                <Text className="text-2xl font-bold text-green-700">
                    Cheyyaan Ullath
                </Text>
                <ScrollView className="h-full">
                    <View className="mt-6 mb-32">
                        {taskItems.map((item, index) => (
                            <TouchableOpacity
                                key={index}
                                onPress={() => handleRemove(index)}
                            >
                                <Task text={item} />
                            </TouchableOpacity>
                        ))}
                    </View>
                </ScrollView>
            </View>

            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                className="flex flex-row justify-center mx-2 position-absolute bottom-32"
            >
                <TextInput
                    className="flex-1 p-4 rounded-full border border-neutral-700 bg-neutral-900 text-green-700"
                    placeholder={"Enth Cheyyanam"}
                    placeholderTextColor={"green"}
                    value={task}
                    onChangeText={(text) => setTask(text)}
                />
                <TouchableOpacity
                    className="w-16 h-16 justify-center rounded-full border border-neutral-700 bg-neutral-900 text-green-700"
                    onPress={() => handleAdd()}
                >
                    <Text className="text-4xl text-center text-green-700">
                        +
                    </Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    )
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#222",
//     },
//     taskWrapper: {
//         paddingTop: 80,
//         paddingHorizontal: 20,
//     },
//     taskHeading: {
//         color: "green",
//         fontSize: 24,
//         fontWeight: "bold",
//     },
//     taskList: {
//         marginTop: 20,
//         marginBottom: 150,
//     },
//     taskInputContainer: {
//         position: "absolute",
//         bottom: 60,
//         width: "100%",
//         flexDirection: "row",
//         justifyContent: "center",
//         alignItems: "center",
//     },
//     taskInput: {
//         paddingVertical: 15,
//         paddingHorizontal: 15,
//         color: "green",
//         backgroundColor: "#111",
//         borderRadius: 60,
//         borderColor: "#333",
//         borderWidth: 1,
//         width: 250,
//     },
//     taskAdd: {
//         width: 60,
//         height: 60,
//         backgroundColor: "#111",
//         borderRadius: 60,
//         justifyContent: "center",
//         alignItems: "center",
//         borderColor: "#333",
//         borderWidth: 1,
//     },
//     taskAddText: {
//         color: "green",
//         textAlign: "center",
//         fontSize: 30,
//     },
// })
