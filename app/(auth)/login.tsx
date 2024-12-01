import AuthPageLayout from "@/components/shared/AuthPageLayout";
import CustomButton from "@/components/shared/CustomButton";
import CustomInput from "@/components/shared/CustomInput";
import CustomPasswordInput from "@/components/shared/CustomPasswordInput";
import { Link, router } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const Login = () => {
  return (
    <AuthPageLayout
      title="Login"
      headerText=" Please sign in to your existing account"
    >
      <View className="mb-4">
        <CustomInput
          label="Email Address"
          placeholder="Enter your email address"
          inputStyle="bg-[#F0F5FA] border-[#F0F5FA] py-4 text-[18px]"
          labelStyle="text-[#32343E] text-[14px]"
        />
      </View>
      <View className="mb-4">
        <CustomPasswordInput
          label="Password"
          placeholder="Enter your password"
          inputStyle="bg-[#F0F5FA] border-[#F0F5FA] py-4 text-[18px]"
          labelStyle="text-[#32343E] text-[14px]"
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
    </AuthPageLayout>
  );
};

export default Login;
