import { Text, View, SafeAreaView } from "react-native";
import Header from "../src/components/header";
import generatedStyles from "../src/utils/generalStyles";
import generalStyles from "../src/utils/generalStyles";
import Input from "@/src/components/input";
export default function Index() {
  return (
    <SafeAreaView style={generalStyles.flex1}>
      <Input placeholder="Write Something To Do" />
      <Text>Welcome to the home page</Text>
    </SafeAreaView>
  );
  // Add your other components here
}
