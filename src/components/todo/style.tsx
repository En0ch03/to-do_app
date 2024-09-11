import { colors } from "@/src/utils/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  todowrapper: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.bgPrimary,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    width: "90%",
    fontWeight: "bold",
    color: colors.bgPrimary,
    fontSize: 20,
  },
  date: {
    color: colors.bgHead,
    marginTop: 10,
    fontStyle: "italic",
    fontSize: 15,
    flexDirection: "row",
    fontWeight: "bold",
  },
  textwrapper: {
    flex: 1,
  },

  iconswrapper: {
    marginBottom: 40,
  },
});

export default styles;
