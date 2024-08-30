import { Text, View, SafeAreaView } from "react-native";
import Header from "../src/components/header";

export default function Index() {
  return (
    <SafeAreaView>
      <Header title="My Todo App" />
      <Text>Welcome to the home page</Text>

      <View>
        <Text>Hello</Text>
      </View>
    </SafeAreaView>
  );
}
