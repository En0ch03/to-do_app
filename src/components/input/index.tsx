import React from "react";
import styles from "./style";
import { View, TextInput } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

const Input = ({
  placeholder = "Write Something To Do",
  keyboardType = "default",
  multiline = false,
}) => {
  return (
    <View>
      <TextInput
        keyboardType={keyboardType as any}
        style={styles.input}
        placeholder={placeholder}
        multiline={multiline}
      />
    </View>
  );
};

export default Input;
