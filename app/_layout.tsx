import { Stack } from "expo-router";
import { View, StyleSheet } from "react-native";
import styles from "@/src/components/input/style";

export default function RootLayout() {
  return <Stack screenOptions={{ headerTitle: "My To-do App" }}></Stack>;
}
