import AuthPageLayout from "@/components/shared/AuthPageLayout";
import CustomButton from "@/components/shared/CustomButton";
import CustomInput from "@/components/shared/CustomInput";
import CustomPasswordInput from "@/components/shared/CustomPasswordInput";
import { Link, router } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const Register = () => {
  return (
    <AuthPageLayout title="Create Account" headerText="Sign up to get started">
      <View className="mb-4">
        <CustomInput
          label="Name"
          placeholder="Enter your full name"
          inputStyle="bg-[#F0F5FA] border-[#F0F5FA] py-4 text-[16px]"
          labelStyle="text-[#32343E]  text-[14px]"
        />
      </View>

      <View className="mb-4">
        <CustomInput
          label="Email Address"
          placeholder="Enter your email address"
          inputStyle="bg-[#F0F5FA] border-[#F0F5FA] py-4 text-[16px]"
          labelStyle="text-[#32343E]  text-[14px]"
          inputType="email-address"
        />
      </View>
      <View className="mb-4">
        <CustomPasswordInput
          label="Password"
          placeholder="Enter your password"
          inputStyle="bg-[#F0F5FA] border-[#F0F5FA] py-4 text-[16px]"
          labelStyle="text-[#32343E]  text-[14px]"
        />
      </View>

      <View className="mt-10 w-full">
        <CustomButton
          title={"Register"}
          onPress={() => router.replace("/login")}
          extraClass="bg-primary-500"
          extraTextClass="text-white text-[18px] -tracking-[1px]"
        />
      </View>

      <View className="mt-5">
        <Text className="text-[#646982] font-SenMedium text-center text-[16px]">
          {" "}
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-primary-500 font-SenSemiBold underline "
          >
            <Text>Login</Text>
          </Link>
        </Text>
      </View>
    </AuthPageLayout>
  );
};

export default Register;
