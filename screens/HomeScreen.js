import { View, Text, SafeAreaView, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {HeroImage } from '../assets/index.js'
const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white relative">
      {/* first section */}
      <View className="flex-row px-6 mt-8 items-center space-x-2">
        <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
          <Text className="text-[#00BCC9] text-3xl font-semibold">Go</Text>
        </View>
        <Text className="text-[#2A2B4B] text-3xl font-semibold">Travel</Text>
      </View>
      {/* second section */}
      <View className="px-6 mt-8 space-y-3">
        <Text className="text-[#3C6072] text-[42px] ">Enjoy the trip with</Text>
        <Text className="text-[#00BCC9] text-[38px] font-bold">Good Moment</Text>
        <Text className="text-[#3C6072] text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
            Lorem ipsum dolor sit amet, 
        </Text>
      </View>
      {/* circle section */}
      <View className="w-[400px] h-[400px] bg-[#00BCC9] rounded-full absolute bottom-36 -right-40"></View>
      <View className="w-[400px] h-[400px] bg-[#E99265] rounded-full absolute -bottom-28 -left-36"></View>
    {/* image container */}
    <View className="flex-1 relative items-center justify-center">
        <Image source={HeroImage} className="w-full h-full object-cover mt-20" />
    </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
