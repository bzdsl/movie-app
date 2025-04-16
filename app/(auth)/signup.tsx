/** @format */

import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { useRouter } from "expo-router";

const SignUp = () => {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View className="bg-primary flex-1 ">
        {/* Background */}
        <Image
          source={images.bg}
          className="absolute w-full h-full z-0"
          resizeMode="cover"
        />

        {/* Content */}
        <View className="z-10 mt-24 items-center">
          {/* Logo */}
          <Image
            source={icons.logo}
            className="w-12 h-10 mb-6"
            resizeMode="contain"
          />

          {/* Title */}
          <Text className="text-white text-2xl font-bold mb-8">
            Create an Account
          </Text>

          {/* Form */}
          <View className="w-full space-y-5">
            <TextInput
              placeholder="Name"
              placeholderTextColor="#ccc"
              className="bg-white/10 text-white border border-white/20 rounded-xl px-4 py-3 mb-6"
            />
            <TextInput
              placeholder="Email"
              placeholderTextColor="#ccc"
              className="bg-white/10 text-white border border-white/20 rounded-xl px-4 py-3 mb-6"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <TextInput
              placeholder="Password"
              placeholderTextColor="#ccc"
              className="bg-white/10 text-white border border-white/20 rounded-xl px-4 py-3 mb-6"
              secureTextEntry
            />
          </View>

          {/* Sign Up Button */}
          <TouchableOpacity
            className="bg-white mt-8 py-3 px-10 rounded-xl active:opacity-80"
            onPress={() => {
              // TODO: Handle sign up logic
            }}>
            <Text className="text-primary font-semibold text-base">
              Sign Up
            </Text>
          </TouchableOpacity>

          {/* Already have an account? */}
          <TouchableOpacity
            onPress={() => router.push("/(auth)/login")}
            className="mt-6">
            <Text className="text-gray-400 text-sm">
              Already have an account?{" "}
              <Text className="text-white underline">Login</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;
