import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { paddingHorizontal: 20 },
  textInput: {
    height: 40,
    borderBottomWidth: 1,
  },
  label: { marginTop: 10 },
  textInputSuccess: {
    borderBottomColor: "black",
  },
  button: {
    marginTop: 20,
    backgroundColor: "rgb(99,177,28)",
    borderRadius: 10,
    textAlign: "center",
  },
  textButton: {
    textAlign: "center",
    color: "white",
    paddingVertical: 10,
    textTransform: "uppercase",
  },
  errorInput: {
    color: "red",
    fontSize: 12,
    marginVertical: 5,
  },
  loading: {
    height: 20,
    marginTop: 30,
  },
});
