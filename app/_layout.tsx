import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerTitle: "header" }}>
      <Stack.Screen name="index" />
    </Stack>
  );
}
