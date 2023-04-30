import { StyleSheet, TextInput, View, Button, Modal, Image } from "react-native";
import React, { useState } from "react";

const GoalInput = (props) => {
  const [enterGoalText, setEnterGoalText] = useState("");
  const goalInputHandler = (text) => {
    setEnterGoalText(text);
  };
  const addGoalHandler = () => {
    props.onAddGoal(enterGoalText);
    setEnterGoalText("");
  };
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require("../assets/images/goal.png")} />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={enterGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color={"#f31282"} />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color={"#b180f0"} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    width: "100%",
    padding: 12,
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 12,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});

export default GoalInput;
