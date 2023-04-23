import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [enterGoalText, setEnterGoalText] = useState();

  const goalInputHandler = (text) => {
    setEnterGoalText(text);
  };

  const addGoalHandler = () => {
    console.log(enterGoalText);
  };
  return (
    <View style={styles.appContainer}>
      <StatusBar style="auto" />
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Your course goal!" onChangeText={goalInputHandler} />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View>
        <Text>List of goals ...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "blue",
    width: "80%",
    marginRight: 8,
    padding: 8,
  },
});
