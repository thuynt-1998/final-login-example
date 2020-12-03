import { StyleSheet } from "react-native";

export const _colorOne = "white";
export const styles = StyleSheet.create({
  container: { paddingHorizontal: 20 },
  textInput: {
    backgroundColor: "transparent",
    textAlign: "center",
    height: 50,
    color: "rgb(179,189,197)",
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  flex1: { flex: 1 },
  marginVertical: { marginVertical: 20, textAlign: "center" },
  marginContainer: { marginHorizontal: 40 },
  label: { marginTop: 10 },
  textInputSuccess: {
    borderBottomColor: _colorOne,
  },
  marginLeft20: { marginLeft: 20 },
  marginLeft5: { marginLeft: 5 },
  buttonRadius: {
    borderRadius: 30,
  },
  button: {
    marginTop: 20,
    textAlign: "center",
    backgroundColor: "rgb(0,150,255)",
  },
  errorInput: {
    color: "white",
    fontSize: 12,
    marginVertical: 5,
  },
  loading: {
    height: 20,
    marginTop: 30,
  },
  underline: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  underlineThought: {
    borderBottomWidth: 1,
    borderColor: _colorOne,
    flex: 1,
  },
  underlineText: {
    fontSize: 16,
    paddingHorizontal: 5,
  },
  text: { color: _colorOne },
  logo: { textTransform: "uppercase", fontSize: 70, color: "rgb(179,189,197)" },
  fontSize16: { fontSize: 16 },
  labelLink: { fontSize: 14, marginLeft: 0 },
  fontWeightOne: { fontWeight: "normal" },
  letterSpacing: { letterSpacing: 0 },
});
