import DATA from '@/constants/data';
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';



type ItemProps = { title: string };

const Item = ({ title }: ItemProps) => (
  <View className=' p-5 my-2 mx-5 border rounded-md'>
    <Text className='text-lg'>{title}</Text>
  </View>
);

const Home = () => {
  const insets = useSafeAreaInsets();

  return (
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
        contentContainerStyle={{
          paddingBottom: 96 + insets.bottom,
          paddingTop: 5 +insets.top,
        }}
      />
  );
};

export default Home;
