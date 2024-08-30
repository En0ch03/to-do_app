import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerTitle: "My To-do App" }}>
      <Stack.Screen name="index" />
    </Stack>
  );
}
