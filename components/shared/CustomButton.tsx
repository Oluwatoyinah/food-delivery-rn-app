import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { ButtonProps } from "@/types/types"; // Ensure the path is correct

const CustomButton = ({
  onPress,
  title = "Click me",
  extraClass,
  extraTextClass,
  IconLeft,
  IconRight,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      className={`w-full rounded-[10px] p-3 flex justify-center items-center  ${extraClass}`}
      onPress={onPress}
    >
      <View>{IconLeft && <IconLeft />}</View>
      <Text className={`text-lg font-SenRegular ${extraTextClass}`}>
        {title}
      </Text>
      <View>{IconRight && <IconRight />}</View>
    </TouchableOpacity>
  );
};

export default CustomButton;
