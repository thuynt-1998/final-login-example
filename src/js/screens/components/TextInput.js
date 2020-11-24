import React from "react";
import { Text, TextInput, View } from "react-native";
function TextInputComponent(props) {
  const {
    style,
    label,
    onChangeText,
    onBlur,
    placeholder,
    error,
    value,
    secureTextEntry,
  } = props;
  return (
    <View>
      <Text style={[style.label, error === "" ? null : style.labelError]}>
        {label}
      </Text>
      <TextInput
        style={[
          style.textInput,
          error === "" ? style.textInputSuccess : style.textInputError,
        ]}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={value}
      />
      <Text style={style.errorInput}> {error}</Text>
    </View>
  );
}

export default TextInputComponent;
