import { CustomInputProps } from "@/types/types";
import React from "react";
import { Text, TextInput, View } from "react-native";

const CustomInput = ({
  label,
  labelStyle,
  placeholder,
  inputStyle,
}: CustomInputProps) => {
  return (
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
  );
};

export default CustomInput;
