import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function Index() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 2000);
    return () => clearTimeout(timer);
  }, []);
  
  if(ready) {
    return <Redirect href="/signin" />;
  }
  return(
    <View className="flex-1 items-center justify-center">
      <View className="w-16 h-16 bg-red-500 rounded-full animate-pulse">
        <Text className="text-white text-lg font-bold text-center mt-2">
          K
        </Text>
       </View>
      </View>
  )
}