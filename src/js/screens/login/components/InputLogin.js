import React from "react";
import { View, Text, TextInput as TextInputRender } from "react-native";
import { DefaultTheme, HelperText, TextInput } from "react-native-paper";
import { styles } from "../Login.style";
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "rgb(179,189,197)",
    text: "rgb(179,189,197)",
    placeholder: "rgb(179,189,197)",
  },
};
function InputLogin(props) {
  const { label, setValue, errors, title, left, secureTextEntry } = props;
  return (
    <View>
      <TextInput
        name={label}
        style={[styles.textInput, styles.textInputSuccess]}
        onChangeText={(text) => {
          setValue(label, text);
        }}
        theme={theme}
        left={<TextInput.Icon name={left} />}
        render={(props) => (
          <TextInputRender
            {...props}
            style={[styles.textInput, styles.textInputSucces]}
          />
        )}
        underlineColor="rgb(179,189,197)"
        placeholder={title}
        secureTextEntry={secureTextEntry}
      />
      <HelperText style={styles.errorInput}>
        {errors && errors.message}
      </HelperText>
    </View>
  );
}

export default InputLogin;
