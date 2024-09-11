import { Stack } from "expo-router";
import { View, StyleSheet } from "react-native";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitle: "My To-do App",
        headerStyle: { backgroundColor: "#00CCDD" },
        headerTintColor: "#F5F5F5",
        headerTitleStyle: {
          fontWeight: "bold",
          fontFamily: "Georgia",
          fontSize: 20,
        },
      }}
    ></Stack>
  );
}
