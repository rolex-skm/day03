import React from 'react';
import { FlatList, StatusBar, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const DATA = [
  { id: '1', title: 'Item 1' },
  { id: '2', title: 'Item 2' },
  { id: '3', title: 'Item 3' },
  { id: '4', title: 'Item 4' },
  { id: '5', title: 'Item 5' },
  { id: '6', title: 'Item 6' },
  { id: '7', title: 'Item 7' },
  { id: '8', title: 'Item 8' },
  { id: '9', title: 'Item 9' },
  { id: '10', title: 'Item 10' },
  { id: '11', title: 'Item 11' },
  { id: '12', title: 'Item 12' },
  { id: '13', title: 'Item 13' },
  { id: '14', title: 'Item 14' },
  { id: '15', title: 'Item 15' },
  { id: '16', title: 'Item 16' },
  { id: '17', title: 'Item 17' },
  { id: '18', title: 'Item 18' },
  { id: '19', title: 'Item 19' },
  { id: '20', title: 'Item 20' },
  { id: '21', title: 'Item 21' },
  { id: '22', title: 'Item 22' },
  { id: '23', title: 'Item 23' },
  { id: '24', title: 'Item 24' },
  { id: '25', title: 'Item 25' },
  { id: '26', title: 'Item 26' },
  { id: '27', title: 'Item 27' },
  { id: '28', title: 'Item 28' },
  { id: '29', title: 'Item 29' },
  { id: '30', title: 'Item 30' },
  { id: '31', title: 'Item 31' },
  { id: '32', title: 'Item 32' },
  { id: '33', title: 'Item 33' },
  { id: '34', title: 'Item 34' },
  { id: '35', title: 'Item 35' },
  { id: '36', title: 'Item 36' },
  { id: '37', title: 'Item 37' },
  { id: '38', title: 'Item 38' },
  { id: '39', title: 'Item 39' },
  { id: '40', title: 'Item 40' },
  { id: '41', title: 'Item 41' },
  { id: '42', title: 'Item 42' },
  { id: '43', title: 'Item 43' },
  { id: '44', title: 'Item 44' },
  { id: '45', title: 'Item 45' },
  { id: '46', title: 'Item 46' },
  { id: '47', title: 'Item 47' },
  { id: '48', title: 'Item 48' },
  { id: '49', title: 'Item 49' },
  { id: '50', title: 'Item 50' },
];

type ItemProps = { title: string };

const Item = ({ title }: ItemProps) => (
  <View className='bg-pink-300 p-5 my-2 mx-5 border rounded-md'>
    <Text className='text-lg'>{title}</Text>
  </View>
);

const Home = () => (
  <SafeAreaProvider>
    <SafeAreaView className='flex-1' style={{ marginTop: StatusBar.currentHeight || 0 }}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  </SafeAreaProvider>
);

export default Home;