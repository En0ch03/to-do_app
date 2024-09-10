import { Text, View, SafeAreaView } from "react-native";
import Header from "../src/components/header/index";
import generatedStyles from "../src/utils/generalStyles";
import generalStyles from "../src/utils/generalStyles";
import Input from "@/src/components/input";
import styles from "@/src/components/header/styles";
export default function Index() {
  return (
    <SafeAreaView style={generalStyles.flex1}>
      <Input placeholder="Write Something To Do" />
    </SafeAreaView>
  );
  // Add your other components here
}
