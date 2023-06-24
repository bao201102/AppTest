import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { Children } from "react";
import { GlobalStyle } from "../../constants/style";

export default function Button({ children, onPress, mode, style }) {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <View style={[styles.button, mode === "flat" && styles.flat]}>
        <Text style={[styles.buttonText, mode === "flat" && styles.flatText]}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: GlobalStyle.colors.primary500,
  },
  flat: {
    backgroundColor: "transparent",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  flatText: {
    color: GlobalStyle.colors.primary200,
  },
});
