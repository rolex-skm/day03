import { HomeIcon, LiveIcon, ProfileIcon, QuizIcon, VideoIcon } from '@/component/icons/TabIcons';
import styles from '@/constants/tabStyle';
import { BlurView } from 'expo-blur';
import React from 'react';
import { View } from 'react-native';
import TabBarButton from './TabBarButton';


const CustomTabBar = ({ state, descriptors, navigation }: any) => {
    return (
        <View style={styles.tabBarWrapper}>
            <BlurView intensity={80} tint="light" style={styles.tabBar}>
                {state.routes.map((route: any, index: number) => {
                    const { options } = descriptors[route.key];
                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name, route.params);
                        }
                    };

                    let Icon = HomeIcon;
                    if (route.name === 'video') Icon = VideoIcon;
                    if (route.name === 'live') Icon = LiveIcon;
                    if (route.name === 'quiz') Icon = QuizIcon;
                    if (route.name === 'profile') Icon = ProfileIcon;

                    return (
                        <TabBarButton
                            key={route.key}
                            route={route}
                            isFocused={isFocused}
                            options={options}
                            onPress={onPress}
                            Icon={Icon}
                        />
                    );
                })}
            </BlurView>
        </View>
    );
};

export default CustomTabBar;