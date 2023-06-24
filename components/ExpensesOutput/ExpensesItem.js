import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { GlobalStyle } from "../../constants/style";
import { getFormattedDate } from "../../util/date";
import { useNavigation } from "@react-navigation/native";

export default function ExpensesItem({ id, description, date, amount }) {
  const navigation = useNavigation();

  function expensesPressHandler() {
    navigation.navigate("ManageExpense", {
      expenseId: id,
    });
  }

  return (
    <TouchableOpacity onPress={expensesPressHandler}>
      <View style={styles.expensesItem}>
        <View>
          <Text style={[styles.textBase, styles.description]}>{description}</Text>
          <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  expensesItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: GlobalStyle.colors.primary500,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 6,
    elevation: 3,
    shadowColor: GlobalStyle.colors.gray500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  textBase: {
    color: GlobalStyle.colors.primary50,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold",
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    minWidth: 75,
  },
  amount: {
    color: GlobalStyle.colors.primary500,
    fontWeight: "bold",
  },
});
