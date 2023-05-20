import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Colors from "../../constants/colors";

function PrimaryButton({ children, onPress }) {
  const pressHandler = () => {
    console.log("press");
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary500,
    borderRadius: 28,
    paddingHorizontal: 16,
    paddingVertical: 8,
    margin: 4,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
export default PrimaryButton;
