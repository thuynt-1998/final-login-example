import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { paddingHorizontal: 20 },
  label: { marginRight: 10, alignItems: "center", marginVertical: 10 },
  labelError: { color: "red" },
  textInput: {
    height: 40,
    borderBottomWidth: 1,
  },
  textInputSuccess: {
    borderBottomColor: "rgb(123,97,193)",
  },
  textInputError: {
    borderBottomColor: "red",
  },
  button: {
    marginTop: 20,
    backgroundColor: "blue",
    borderRadius: 10,
  },
  textButton: {
    textAlign: "center",
    color: "white",
    paddingVertical: 10,
  },
  errorInput: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
  },
});
