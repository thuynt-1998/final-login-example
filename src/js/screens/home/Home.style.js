import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
  flexRow: { flexDirection: "row" },
  textUser: { color: "white", fontSize: 20 },
});
