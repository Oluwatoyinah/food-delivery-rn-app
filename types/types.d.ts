import { TouchableOpacityProps, GestureResponderEvent } from "react-native";

declare interface ButtonProps extends TouchableOpacityProps {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
  IconLeft?: React.ComponentType<any>;
  IconRight?: React.ComponentType<any>;
  extraClass?: string;
  extraTextClass?: string;
}

declare interface CustomInputProps {
  label: string;
  labelStyle?: string;
  placeholder?: string;
  inputStyle?: string;
}
