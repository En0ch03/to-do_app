import { Stack } from "expo-router";
import { colors } from "@/src/utils/constants";
import { View, StyleSheet } from "react-native";

export default function RootLayout() {
  return <Stack screenOptions={{ headerTitle: "My To-do App" }}></Stack>;
}
