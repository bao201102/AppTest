import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const GoalItem = (props) => {
  return (
    <TouchableOpacity style={styles.goalItem} onPress={props.onDeleteItem.bind(this, props.id)}>
      <Text style={styles.goalText}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
});

export default GoalItem;
