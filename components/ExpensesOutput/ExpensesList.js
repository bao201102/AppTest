import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ExpensesItem from "./ExpensesItem";

function renderExpensesItem(itemData) {
  return <ExpensesItem {...itemData.item} />;
}

export default function ExpensesList({ expenses }) {
  return <FlatList data={expenses} renderItem={renderExpensesItem} keyExtractor={(item) => item.id} />;
}

const styles = StyleSheet.create({});
