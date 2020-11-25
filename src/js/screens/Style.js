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
    borderBottomColor: "black",
  },
  textInputError: {
    borderBottomColor: "red",
  },
  button: {
    marginTop: 20,
    backgroundColor: "rgb(99,177,28)",
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
  containerTop: {
    height: 100,
    backgroundColor: "rgb(99,177,28)",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  buttonLogout: {
    backgroundColor: "rgb(99,177,28)",
    width: 90,
    borderRadius: 10,
    height: 40,
    borderColor: "white",
    borderWidth: 1,
  },
  textButtonLogout: {
    color: "white",
    textAlign: "center",
    paddingVertical: 10,
  },
});
