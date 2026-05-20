import CustomTabBar from '@/component/tab/CustomTabBar';
import { Tabs } from 'expo-router';
import React from 'react';



export default function TabsLayout() {
    return (
        <Tabs
            tabBar={(props) => <CustomTabBar {...props} />}
            screenOptions={{ headerShown: false }}>
            <Tabs.Screen name="home" options={{ title: 'Home' }} />
            <Tabs.Screen name="profile" options={{ title: 'Profile' }} />
        </Tabs>
    );
}


