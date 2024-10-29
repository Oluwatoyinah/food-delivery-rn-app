import CustomButton from "@/components/shared/CustomButton";
import CustomInput from "@/components/shared/CustomInput";
import { images } from "@/constants";
import { Link, router } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = () => {
  return (
    // <SafeAreaView className="flex-1">
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, backgroundColor: "#121223" }}
    >
      <View className="relative bg-[#121223]  h-[300px] flex justify-center p-8 flex-row items-end py-10">
        <View className="mt-5">
          <Text className="text-white font-SenSemiBold text-3xl -tracking-[1px] text-center">
            Login
          </Text>
          <Text className="text-[#646982] font-SenRegular text-[18px] mt-3 text-center">
            Please sign in to your existing account
          </Text>
        </View>
        <Image className="absolute top-0 left-0" source={images.AuthBanner} />
      </View>
      <View className="p-5 py-8 bg-white flex-1 rounded-t-[20px]">
        <View className="mb-4">
          <CustomInput
            label="Email"
            placeholder="Enter your email address"
            inputStyle="bg-[#F0F5FA] border-[#F0F5FA] py-4 text-[18px]"
            labelStyle="text-[#32343E] uppercase text-[14px]"
          />
        </View>
        <View className="mb-4">
          <CustomInput
            label="Password"
            placeholder="Enter your password"
            inputStyle="bg-[#F0F5FA] border-[#F0F5FA] py-4 text-[18px]"
            labelStyle="text-[#32343E] uppercase text-[14px]"
          />
        </View>

        <View className="mt-10 w-full">
          <CustomButton
            title={"Login"}
            onPress={() => router.replace("/home")}
            extraClass="bg-primary-500"
            extraTextClass="text-white text-[18px] -tracking-[1px]"
          />
        </View>

        <View className="mt-5">
          <Text className="text-[#646982] font-SenMedium text-center text-[16px]">
            {" "}
            Don't have an account?{" "}
            <Link
              href="/register"
              className="text-primary-500 font-SenSemiBold underline "
            >
              <Text>Register</Text>
            </Link>
          </Text>
        </View>
      </View>
    </ScrollView>
    // </SafeAreaView>
  );
};

export default Login;
