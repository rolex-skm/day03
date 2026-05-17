import "@/global.css";
import { Stack } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import * as SystemUI from "expo-system-ui";
import { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  useEffect(() => {
    SystemUI.setBackgroundColorAsync("#ffffff");
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar style="light" backgroundColor="#ffffff" />
      <Stack screenOptions={{ headerShown: false, animation: "none" }} />
    </SafeAreaProvider>
  )

}