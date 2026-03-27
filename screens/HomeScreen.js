import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>THE TO-DO LIST</Text>

      <View style={styles.card}>
        <Text style={styles.row}>Wash the Dishes</Text>
        <Text style={styles.row}>Do homework</Text>
        <Text style={styles.row}>Finish Assignment Work</Text>
        <Text style={styles.row}>Walk the dog</Text>
        <Text style={styles.row}>Complete the quiz</Text>
      </View>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("newToDo")}
      >
        <Text style={styles.buttonText}>Add New To-Do</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f4f7",
    paddingTop: 60,
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

  card: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 10,
  },

  row: {
    fontSize: 16,
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    color: "#444",
  },
  buttonStyle: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: "#1c95e6",
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    alignSelf: "center",
    justifyContent: "stretch",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
  },
});

export default HomeScreen;
