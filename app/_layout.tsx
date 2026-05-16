import "@/global.css";
import { Stack } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import * as SystemUI from "expo-system-ui";
import { useEffect } from "react";
export default function RootLayout() {
  useEffect(() => {
    SystemUI.setBackgroundColorAsync("#f3f4f6");
  }, []);

  return (
    <>
      <StatusBar style="light" backgroundColor="#000000" />
      <Stack screenOptions={{ headerShown: false, animation: "none" }} />
    </>
  )

}