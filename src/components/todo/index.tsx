import React from "react";
import { Text, View } from "react-native";
import { useState } from "react";

const Todo = ({ todo = { text: "Not available" } }) => {
  return (
    <View>
      <Text>{todo?.text}</Text>
    </View>
  );
};

export default Todo;
