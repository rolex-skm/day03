import { Redirect } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { Animated, View } from "react-native";

export default function Index() {
  const [ready, setReady] = useState(false);
  const scaleValue = useRef(new Animated.Value(0.5)).current;
  const opacityValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Start entry animation
    Animated.parallel([
      Animated.spring(scaleValue, {
        toValue: 1,
        tension: 10,
        friction: 2,
        useNativeDriver: true,
      }),
      Animated.timing(opacityValue, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      })
    ]).start();

    // Redirect after 2.5 seconds
    const timer = setTimeout(() => setReady(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (ready) {
    return <Redirect href="/signin" />;
  }

  return (
    <View className="flex-1 bg-amber-100 items-center justify-center">
      <Animated.Image 
        source={require('../assets/images/logo.jpg')}
        style={{ 
          width: 140, 
          height: 140, 
          borderRadius: 30,
          opacity: opacityValue,
          transform: [{ scale: scaleValue }] 
        }}
        resizeMode="contain"
      />
      <Animated.Text 
        style={{ 
          opacity: opacityValue, 
          transform: [{ scale: scaleValue }] 
        }}
        className="text-red-500 text-4xl font-extrabold mt-6 tracking-widest"
      >
        KYOKU
      </Animated.Text>
    </View>
  )
}