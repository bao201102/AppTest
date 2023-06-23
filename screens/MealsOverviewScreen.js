import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealList/MealItem";
import MealList from "../components/MealList/MealList";

export default function MealsOverviewScreen({ route, navigation }) {
  const cateId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(cateId) >= 0;
  });

  useEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => category.id === cateId).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [cateId, navigation]);

  return <MealList items={displayedMeals} />;
}

const styles = StyleSheet.create({});
