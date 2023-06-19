import { Image, ScrollView, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import React from "react";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({ roundNumber, userNumber, onStartNewGame }) {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;

  if (width < 300) {
    imageSize = 150;
  }

  if (height < 420) {
    imageSize = 100;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
        <Title>GAME OVER!!</Title>
        <View style={[styles.imageContainer, imageStyle]}>
          <Image style={styles.image} source={require("../assets/images/success.png")} />
        </View>
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.highLight}>{roundNumber}</Text> rounds to guess the number{" "}
          <Text style={styles.highLight}>{userNumber}</Text>.
        </Text>
        <PrimaryButton onPress={onStartNewGame}>Start new game</PrimaryButton>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    // width: 300,
    // height: 300,
    // borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginVertical: 24,
  },
  highLight: {
    // fontFamily: "open-sans-bold",
    fontWeight: "bold",
    color: Colors.primary500,
  },
});

export default GameOverScreen;
