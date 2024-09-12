import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useState } from "react";
import styles from "./style";
import { colors } from "@/src/utils/constants";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";

const Todo = ({
  todos = [],
  setTodos = () => {},
  todo = { text: "Not available", date: new Date(), completed: false },
}) => {
  return (
    <View style={styles.todowrapper}>
      <View style={styles.textwrapper}>
        <Text style={styles.title}>{todo?.text}</Text>
        <Text style={styles.date}>
          {new Date(todo?.date).toLocaleDateString("tr-TR")}
        </Text>
      </View>
      <View style={styles.iconswrapper}>
        <TouchableOpacity>
          <AntDesign
            name={todo?.completed ? "checkcircle" : "checkcircleo"}
            marginTop={20}
            size={25}
            color={colors.check}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons
            paddingRight={5}
            marginTop={20}
            name="delete-forever"
            size={30}
            color={colors.delete}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather
            name="edit-3"
            marginBottom={-20}
            marginTop={20}
            size={25}
            color={colors.edit}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Todo;
