import { StyleSheet } from "react-native";
import { colors } from "@/src/utils/constants";

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.textPrimary,
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 100,
    fontSize: 20,
  },
});

export default styles;
