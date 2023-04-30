import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalVisible] = useState(false);

  const addGoalHandler = (enterGoalText) => {
    setCourseGoals((currentGoals) => [...currentGoals, { text: enterGoalText, id: Math.random().toString() }]);
    setModalVisible(false);
  };

  const deleteGoalHandler = (id) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  };

  const startAddGoalHandler = () => {
    setModalVisible(true);
  };

  const endAddGoalHandler = () => {
    setModalVisible(false);
  };
  return (
    <SafeAreaView style={styles.appContainer}>
      <StatusBar style="light" />
      <Button title="Add new goal" color="#b180f0" onPress={startAddGoalHandler} />
      <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler} />
      <View style={styles.goalContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text} id={itemData.item.id} onDeleteItem={deleteGoalHandler} />;
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a",
  },
  goalContainer: {
    flex: 5,
  },
});
