import { StyleSheet } from "react-native";
import { colors } from "@/src/utils/constants";

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row-reverse",
    marginTop: 20,
    backgroundColor: colors.arkaplan,
    borderRadius: 100,
    padding: 20,

    marginLeft: 10,
  },
  input: {
    width: "82%",
    borderWidth: 2,
    borderColor: colors.bgPrimary,
    paddingHorizontal: 20,
    backgroundColor: colors.bgSecondry,
    paddingVertical: 5,
    borderRadius: 100,
    fontSize: 20,
    marginRight: 10,
    marginLeft: 10,
  },
  icon: {
    fontSize: 40,
    color: colors.bgPrimary,

    marginTop: 2,
  },
});

export default styles;
