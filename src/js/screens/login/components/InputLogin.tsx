import React, { memo } from "react";
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

interface PropsGlobal {
  label: string;
  onValue: (label: string, text: string) => any;
  errors: { message: string };
  title: string;
  left: () => React.ReactNode
  secureTextEntry: boolean;
}

const InputLogin = (props: PropsGlobal) => {
  const { label, onValue, errors, title, left, secureTextEntry } = props;

  return (
    <View style={{ width: "100%" }}>
      <TextInput
        accessibilityLabel="input"
        style={[styles.textInput, styles.textInputSuccess]}
        onChangeText={(text) => onValue(label, text)}
        theme={theme}
        left={<TextInput.Icon name={left} />}
        render={(props) => (
          <TextInputRender
            {...props}
            style={[styles.textInput]}
          />
        )}
        underlineColor="rgb(179,189,197)"
        placeholder={title}
        secureTextEntry={secureTextEntry}
      />
      {errors && <HelperText style={styles.errorInput} type="error" testID="nameError">
        {errors.message}
      </HelperText>}
    </View>
  );
}

export default memo(InputLogin);
