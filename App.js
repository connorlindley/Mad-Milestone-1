import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>The To-Do List</Text>

      <Text style={styles.row}>Wash the Dishes.</Text>
      <Text style={styles.row}>Do homework.</Text>
      <Text style={styles.row}>Finish Assignment Work.</Text>
      <Text style={styles.row}>Go for a walk with the dog.</Text>
      <Text style={styles.row}>Complete the quiz.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    marginTop: 50,
    fontSize: 20,
    marginBottom: 10,
    textAlign: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
  },
  row: {
    padding: 10,
    backgroundColor: "#b8b8b8",
    margin: 10,
    marginLeft: 20,
    marginRight: 20,
  },
});
