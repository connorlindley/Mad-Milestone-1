import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AddToDo = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo Screen</Text>
      <View style={styles.row}>
        <View style={styles.itemBox}>
          <Text style={styles.item}>Back</Text>
        </View>
        <View style={styles.itemBox}>
          <Text style={styles.item}>Save</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f4f7",
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
    borderBottomColor: "#333",
    borderBottomWidth: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    position: "absolute",
    bottom: 70,
    right: 20,
    left: 20,
  },
  itemBox: {
    backgroundColor: "#1c95e6",
    padding: 10,
    borderRadius: 8,
    minWidth: 100,
    alignItems: "center",
    marginRight: 30,
    marginLeft: 30,
  },
  item: {
    fontSize: 18,
    color: "#ffffff",
  },
});

export default AddToDo;
