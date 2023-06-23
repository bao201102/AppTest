import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useLayoutEffect } from "react";
import { MEALS } from "../data/dummy-data";
import MealDetail from "../components/MealDetail";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/favorites-context";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorites";

export default function MealDetailScreen({ route, navigation }) {
  // const favoriteMealCtx = useContext(FavoritesContext);

  const favMealIds = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();

  const mealId = route.params.mealId;

  const data = MEALS.find((meal) => meal.id === mealId);

  // const mealIsFav = favoriteMealCtx.ids.includes(mealId);
  const mealIsFav = favMealIds.includes(mealId);

  function changeFavoriteHandler() {
    if (mealIsFav) {
      // favoriteMealCtx.removeFavorite(mealId);
      dispatch(removeFavorite({ id: mealId }));
    } else {
      // favoriteMealCtx.addFavorite(mealId);
      dispatch(addFavorite({ id: mealId }));
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton icon={mealIsFav ? "star" : "star-outline"} color="white" onPress={changeFavoriteHandler} />;
      },
    });
  }, [navigation, changeFavoriteHandler]);

  useEffect(() => {
    navigation.setOptions({
      title: data.title,
    });
  }, [data, navigation]);

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: data.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{data.title}</Text>
      <MealDetail
        duration={data.duration}
        complexity={data.complexity}
        affordability={data.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredient</Subtitle>
          <List data={data.ingredients} />

          <Subtitle>Steps</Subtitle>
          <List data={data.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
