import React from "react";
import styles from "./style";
import { View, TextInput, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

const Input = ({
  placeholder = "Write Something To Do",
  keyboardType = "default",
  multiline = false,
  onIconPress = () => {},
  value = "",
  onChangeText = (text: any) => {},
}) => {
  return (
    <View style={styles.wrapper}>
      <TextInput
        keyboardType={keyboardType as any}
        style={styles.input}
        placeholder={placeholder}
        multiline={multiline}
        value={value}
        onChangeText={onChangeText}
      />
      <TouchableOpacity onPress={onIconPress}>
        <AntDesign name="pluscircleo" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default Input;
