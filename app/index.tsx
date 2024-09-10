import { Text, View, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import { colors } from "../src/utils/constants";
import generalStyles from "../src/utils/generalStyles";
import Input from "@/src/components/input";
import { useState } from "react";
import Todo from "@/src/components/todo";
export default function Index() {
  const [text, setText] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  interface Todo {
    id: string;
    text: string;
    date: Date;
    completed: boolean;
  }

  const addTodo = () => {
    const newTodo = {
      id: String(new Date().getTime()),
      text: text,
      date: new Date(),
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setText("");
  };

  return (
    <SafeAreaView style={[generalStyles.flex1, generalStyles.bgwhite]}>
      <Input
        value={text}
        onChangeText={(text: any) => setText(text)}
        //onIconPress={() => Alert.alert("Task Added")}
        placeholder="Write Something To Do"
        onIconPress={addTodo}
      />
      <View style={styles.todosWrapper}>
        {todos.length === 0 ? (
          <Text style={styles.emptyText}>There is nothing to do !</Text>
        ) : (
          <ScrollView style={styles.scrollView}>
            {todos?.map((todo) => (
              <Todo key={todo?.id} todo={todo} />
            ))}
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
  // Add your other components here
}
const styles = StyleSheet.create({
  todosWrapper: { flex: 1, marginHorizontal: 20, marginVertical: 30 },
  emptyText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: colors.bgPrimary,
  },
  scrollView: {
    flexGrow: 1,
  },
});
