import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const TAB_BAR_HEIGHT = 58;

export default function TabLayout() {
    const insets = useSafeAreaInsets();
    const bottomPadding = Math.max(insets.bottom, Platform.OS === "android" ? 14 : 8);

    return (
        <Tabs screenOptions={{
            headerShown: false,
            animation: "none",

            tabBarStyle: {
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,

                height: TAB_BAR_HEIGHT + bottomPadding,
                paddingBottom: bottomPadding,
                paddingTop: 8,

                backgroundColor: "#ffffff",

                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
            },

            tabBarActiveTintColor: "black",
            tabBarInactiveTintColor: "#D1D5DB",
            tabBarLabelStyle: {
                fontSize: 12,
                marginTop: 2,
            },
        }}>
            <Tabs.Screen
                name="home"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="home" color={color} size={20} />
                    )
                }}
            />

            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile",
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="person" color={color} size={20} />
                    )
                }}
            />
        </Tabs>
    )
}
