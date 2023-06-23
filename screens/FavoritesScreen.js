import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import MealList from "../components/MealList/MealList";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";

export default function FavoritesScreen() {
  // const favoriteMealCtx = useContext(FavoritesContext);
  const favMealIds = useSelector((state) => state.favoriteMeals.ids);

  // const favMeals = MEALS.filter((meal) => favoriteMealCtx.ids.includes(meal.id));
  const favMeals = MEALS.filter((meal) => favMealIds.includes(meal.id));

  if (favMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return <MealList items={favMeals} />;
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
