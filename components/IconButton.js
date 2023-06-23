import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function IconButton({ icon, color, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Ionicons name={icon} size={24} color={color} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
