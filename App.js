import { StyleSheet, Text, View } from "react-native";
import Header from "./src/components/Header";

export default function App() {
  const tasks = ["task 1", "task 2", "task 3", "task 4", "task 5"];
  return (
    <View style={styles.container}>
      <Header titulo="lista de alunos" />
      <Header titulo="lista de professores" />
      <Header titulo="lista de desatentos" />
      {/* <listaestado/> */}
      {tasks.map((task) => (
        <Text>{task}</Text>
      ))}
  
    </View>
    
  );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
