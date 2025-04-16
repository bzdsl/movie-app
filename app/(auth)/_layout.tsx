/** @format */

import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // 🔥 Hide headers for all auth screens
      }}
    />
  );
}
