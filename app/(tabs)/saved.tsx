/** @format */

import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { icons } from "@/constants/icons";

const Profile = () => {
  return (
    <View className="flex-1 justify-center items-center bg-primary">
      <View className="flex justify-center items-center flex-1 flex-col gap-5">
        <Image source={icons.save} className="size-10" tintColor="#fff" />
        <Text className="text-gray-500 font-base">Profile</Text>
      </View>
    </View>
  );
};

export default Profile;
