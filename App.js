import { useState } from "react"
import { StatusBar } from "expo-status-bar"
import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
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
        <View style={styles.container}>
            <View style={styles.taskWrapper}>
                <Text style={styles.taskHeading}>Cheyyaan Ullath</Text>
                <ScrollView>
                    <View style={styles.taskList}>
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
                style={styles.taskInputContainer}
            >
                <TextInput
                    style={styles.taskInput}
                    placeholder={"Enth Cheyyanam"}
                    placeholderTextColor={"green"}
                    value={task}
                    onChangeText={(text) => setTask(text)}
                />
                <TouchableOpacity
                    style={styles.taskAdd}
                    onPress={() => handleAdd()}
                >
                    <Text style={styles.taskAddText}>+</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#222",
    },
    taskWrapper: {
        paddingTop: 80,
        paddingHorizontal: 20,
    },
    taskHeading: {
        color: "green",
        fontSize: 24,
        fontWeight: "bold",
    },
    taskList: {
        marginTop: 20,
        marginBottom: 150,
    },
    taskInputContainer: {
        position: "absolute",
        bottom: 60,
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    taskInput: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        color: "green",
        backgroundColor: "#111",
        borderRadius: 60,
        borderColor: "#333",
        borderWidth: 1,
        width: 250,
    },
    taskAdd: {
        width: 60,
        height: 60,
        backgroundColor: "#111",
        borderRadius: 60,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#333",
        borderWidth: 1,
    },
    taskAddText: {
        color: "green",
        textAlign: "center",
        fontSize: 30,
    },
})
