import React from "react";
import styles from "./style";
import { View, TextInput } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

const Input = ({ placeholder = "Write Something To Do" }) => {
  return (
    <View>
      <TextInput style={styles.input} placeholder={placeholder} />
    </View>
  );
};

export default Input;
