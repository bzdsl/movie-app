/** @format */

import { SafeAreaView } from "react-native";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Optional: Customize the status bar */}

      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="movies/[id]" options={{ headerShown: false }} />
      </Stack>
    </SafeAreaView>
  );
}
