import { StyleSheet } from "react-native";
import { colors } from "@/src/utils/constants";

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row-reverse",
    marginTop: 20,
    backgroundColor: colors.arkaplan,
    borderRadius: 100,
    padding: 20,
    marginRight: 5,
    marginLeft: 5,
  },
  input: {
    width: "85%",
    borderWidth: 2,
    borderColor: colors.bgPrimary,
    paddingHorizontal: 20,
    backgroundColor: colors.bgSecondry,
    paddingVertical: 5,
    borderRadius: 100,
    fontSize: 20,
    marginRight: 2,
    marginLeft: 10,
  },
  icon: {
    fontSize: 40,
    color: colors.bgPrimary,
    marginTop: 2,
  },
  head: {
    color: colors.bgHead,
  },
});

export default styles;
