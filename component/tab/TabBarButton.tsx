import styles from '@/constants/tabStyle';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { colors } from '../../theme/colors';

const TabBarButton = ({ route, isFocused, options, onPress, Icon }: any) => {
    const scale = useSharedValue(isFocused ? 1 : 0);

    useEffect(() => {
        scale.value = withSpring(isFocused ? 1 : 0, { damping: 12, stiffness: 150 });
    }, [isFocused]);

    const animatedIconStyle = useAnimatedStyle(() => ({
        // removed scaling for static icon size
    }));

    const animatedBgStyle = useAnimatedStyle(() => ({
        opacity: scale.value,
    }));

    return (
        <Pressable
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={styles.tabBarItem}
        >
            <Animated.View style={[styles.iconWrapper, animatedIconStyle]}>
                <Animated.View style={[StyleSheet.absoluteFill, styles.activeIconContainer, animatedBgStyle]}>
                    <LinearGradient
                        colors={[colors.primary.gradientStart, colors.primary.gradientEnd]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={StyleSheet.absoluteFill}
                    />
                </Animated.View>
                <View style={styles.iconForeground}>
                    <Icon color={isFocused ? '#FFFFFF' : '#64748B'} size={isFocused ? 22 : 24} />
                </View>
            </Animated.View>
        </Pressable>
    );
};

export default TabBarButton;