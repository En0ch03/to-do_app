import { Stack } from "expo-router";
import { View, StyleSheet, Platform } from "react-native";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitle: "My To-do App",
        headerStyle: { backgroundColor: "#00CCDD" },
        headerTintColor: "#F5F5F5",
        headerTitleStyle: {
          fontWeight: "bold",
          fontFamily: Platform.OS === "android" ? "serif" : "Georgia",
          fontSize: 20,
        },

        headerTitleAlign: "center",
      }}
    ></Stack>
  );
}
