import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import MealDetail from "../MealDetail";

export default function MealItem({ id, title, imageURL, duration, complexity, affordability }) {
  const navigation = useNavigation();

  function selectMealHandler() {
    navigation.navigate("MealDetail", {
      mealId: id,
    });
  }

  return (
    <TouchableOpacity style={styles.mealItem} onPress={selectMealHandler}>
      <View style={styles.innerContainer}>
        <View>
          <Image source={{ uri: imageURL }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <MealDetail duration={duration} complexity={complexity} affordability={affordability} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  mealItem: {
    margin: 12,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
});
