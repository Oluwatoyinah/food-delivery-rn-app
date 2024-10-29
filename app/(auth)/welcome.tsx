import { Image, StyleSheet, Text, View } from "react-native";
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Swiper from "react-native-swiper";
import { onBoarding } from "@/constants";
import {
  GestureHandlerRootView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import CustomButton from "@/components/shared/CustomButton";
import { router } from "expo-router";

const Welcome = () => {
  const swiperRef = useRef<Swiper>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const isOnLastSlide = currentIndex === onBoarding.length - 1;

  function goToSignUp() {
    router.replace("/register");
  }
  return (
    <SafeAreaView className="flex h-full bg-white items-center justify-between py-5">
      <GestureHandlerRootView className="flex flex-row justify-end items-center mb-5 w-full px-3">
        <TouchableOpacity onPress={goToSignUp}>
          <Text className="font-SenSemiBold text-[18px]">Skip</Text>
        </TouchableOpacity>
      </GestureHandlerRootView>

      <Swiper
        ref={swiperRef}
        loop={false}
        dot={<View className="bg-primary-200 w-2.5 h-2.5 rounded-full mx-1" />}
        activeDot={
          <View className="bg-primary-500 w-2.5 h-2.5 rounded-full mx-1" />
        }
        onIndexChanged={(index) => setCurrentIndex(index)}
      >
        {onBoarding.map((el, i) => (
          <View key={el?.id} className="flex h-auto my-auto">
            <View className="">
              <Image source={el.banner} className="h-[200px]  max-w-[240px] w-full mx-auto bg-neutral-200 rounded-md block mb-10"  />
              {/* <View className="h-[200px]  max-w-[240px] w-full mx-auto bg-neutral-200 rounded-md block mb-10"></View> */}

              <View className="w-11/12 mx-auto">
                <Text className="text-center text-3xl font-SenSemiBold -tracking-[1px]">
                  {el?.title}
                </Text>
                <Text className="text-center text-lg font-SenRegular text-[#646982] mt-4">
                  {el?.description}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </Swiper>

      <View className="w-11/12 mb-10">
        <CustomButton
          title={isOnLastSlide ? "Get started" : "Next"}
          onPress={() =>
            isOnLastSlide ? goToSignUp() : swiperRef.current?.scrollBy(1)
          }
          extraClass="bg-primary-500"
          extraTextClass="text-white text-[18px] -tracking-[1px]"
        />
      </View>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

export default Welcome;
