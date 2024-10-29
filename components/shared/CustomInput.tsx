import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
  TextInput,
} from "react-native";
import React from "react";
import { CustomInputProps } from "@/types/types";

const CustomInput = ({
  label,
  labelStyle,
  placeholder,
  inputStyle,
}: CustomInputProps) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "height" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} className="flex-1">
        <View>
          <Text className={`mb-2  text-[18px] font-SenSemiBold ${labelStyle}`}>
            {label}
          </Text>
          <View>
            <TextInput
              className={`p-2 px-3 border rounded  font-SenRegular ${inputStyle}`}
              placeholder={placeholder}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default CustomInput;
