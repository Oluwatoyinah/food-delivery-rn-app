import { images } from "@/constants";
import React, { ReactNode } from "react";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const ios = Platform.OS == "ios";

interface AuthPageProps {
  children: ReactNode;
  title: string;
  headerText: string;
}

const AuthPageLayout = ({ children, title, headerText }: AuthPageProps) => {
  return (
    <>
      <KeyboardAvoidingView
        className="flex-1"
        behavior={ios ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            contentContainerStyle={{ flexGrow: 1, backgroundColor: "#121223" }}
            keyboardShouldPersistTaps="handled"
          >
            <View className="relative bg-[#121223]  h-[300px] flex justify-center px-8 flex-row items-end py-10">
              <View className="mt-5">
                <Text className="text-white font-SenSemiBold text-4xl -tracking-[2px] text-center">
                  {title}
                </Text>
                <Text className="text-[#646982] font-SenRegular text-[18px] mt-3 text-center">
                  {headerText}
                </Text>
              </View>
              <Image
                className="absolute top-0 left-0"
                source={images.AuthBanner}
              />
            </View>
            <View className="p-5 py-8 bg-white flex-1 rounded-t-[10px]">
              {children}
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </>
    // </SafeAreaView>
  );
};

export default AuthPageLayout;
