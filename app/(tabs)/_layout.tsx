import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
export default function TabLayout() {
    const insets = useSafeAreaInsets();
    return (
        <Tabs screenOptions={{
            headerShown: false,
            animation: "none",

            tabBarStyle: {
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,

                height: 45 + insets.bottom,
                paddingBottom: insets.bottom,
                paddingTop: 8,

                backgroundColor: "#ffffff",

                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
            },

            tabBarActiveTintColor: "black",
            tabBarInactiveTintColor: "#D1D5DB",
        }}>
            <Tabs.Screen
                name="home"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" color={color} size={20} />
                    )
                }}
            />

            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person" color={color} size={20} />
                    )
                }}
            />
        </Tabs>
    )
}