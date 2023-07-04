import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";

export default function PlaceItem({ place, onSelect }) {
  return (
    <TouchableOpacity onPress={onSelect}>
      <Image source={{ uri: place.imageUri }} />
      <View>
        <Text>{place.title}</Text>
        <Text>{place.address}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
