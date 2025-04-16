/** @format */

import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { useRouter } from "expo-router";
import { Client, Account, ID } from "react-native-appwrite";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Initialize Appwrite client
  const client = new Client();
  client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!)
    .setPlatform("react-native");

  const account = new Account(client);

  async function handleLogin() {
    if (!email || !password) {
      Alert.alert("Error", "Please enter both email and password");
      return;
    }

    setIsLoading(true);

    try {
      await account.createEmailPasswordSession(email, password);
      // Successfully logged in, redirect to profile
      router.replace("/profile");
    } catch (error) {
      console.error("Login error:", error);
      Alert.alert(
        "Login Failed",
        "Invalid email or password. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <View className="bg-primary flex-1 relative">
      {/* Background Image */}
      <Image
        source={images.bg}
        className="absolute w-full h-full z-0"
        resizeMode="cover"
      />

      {/* Foreground content */}
      <View className="flex-1 justify-center px-6 z-10">
        {/* Logo */}
        <Image
          source={icons.logo}
          className="w-16 h-16 mb-8 self-center"
          resizeMode="contain"
        />

        {/* Heading */}
        <Text className="text-white text-2xl font-bold text-center mb-4">
          Welcome Back
        </Text>

        {/* Email Input */}
        <TextInput
          placeholder="Email"
          placeholderTextColor="#ccc"
          className="bg-white/10 text-white border border-white/20 rounded-xl px-4 py-3 mb-4"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />

        {/* Password Input */}
        <TextInput
          placeholder="Password"
          placeholderTextColor="#ccc"
          secureTextEntry
          className="bg-white/10 text-white border border-white/20 rounded-xl px-4 py-3 mb-6"
          value={password}
          onChangeText={setPassword}
        />

        {/* Login Button */}
        <TouchableOpacity
          className={`bg-white py-3 rounded-xl mb-4 ${
            isLoading ? "opacity-70" : ""
          }`}
          onPress={handleLogin}
          disabled={isLoading}>
          {isLoading ? (
            <ActivityIndicator color="#0F172A" size="small" />
          ) : (
            <Text className="text-center text-primary font-semibold text-lg">
              Login
            </Text>
          )}
        </TouchableOpacity>

        {/* Sign Up */}
        <TouchableOpacity onPress={() => router.push("/signup")}>
          <Text className="text-white text-center text-lg mt-2 font-bold">
            Sign Up now!
          </Text>
        </TouchableOpacity>

        {/* Forgot password */}
        <TouchableOpacity>
          <Text className="text-white text-center mt-5">
            Forgot your password?
          </Text>
        </TouchableOpacity>

        {/* Go back button */}
        <TouchableOpacity
          className="absolute bottom-5 left-0 right-0 mx-5 bg-red-600 rounded-lg 
          py-3.5 flex flex-row items-center justify-center z-50"
          onPress={() => router.push("/")}>
          <Image
            source={icons.arrow}
            className="size-5 mr-1 mt-0.5 rotate-180"
            tintColor="#fff"
          />
          <Text className="text-white font-semibold text-base">
            Go back to home
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
