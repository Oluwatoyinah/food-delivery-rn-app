import { CustomInputProps } from "@/types/types";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { EyeIcon, EyeSlashIcon } from "react-native-heroicons/outline";

const CustomPasswordInput = ({
  label,
  labelStyle,
  placeholder,
  inputStyle,
  inputType = "default",
}: CustomInputProps) => {
  const [securePassword, setSecurePassword] = useState(true);
  return (
    <View>
      <Text className={`mb-2  text-[18px] font-SenSemiBold ${labelStyle}`}>
        {label}
      </Text>
      <View className="flex gap-1 flex-row items-center">
        <TextInput
          className={`p-2 px-3 border rounded-full flex-grow font-SenRegular ${inputStyle}`}
          // placeholder={placeholder}
          placeholder="Hello"
          keyboardType={inputType}
          secureTextEntry={securePassword}
        />
        <View className="w-[30px] block">
          <TouchableOpacity onPress={() => setSecurePassword((prev) => !prev)}>
            {securePassword ? (
              <EyeIcon size={"28"} color="#333" />
            ) : (
              <EyeSlashIcon width={30} color="#333" />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CustomPasswordInput;
