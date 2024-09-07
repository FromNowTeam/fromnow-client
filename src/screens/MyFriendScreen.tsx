import React, { useState } from 'react';
import { ScrollView, View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import FriendItem from '@components/common/FriendItem';

const { width } = Dimensions.get('window');

const MyFriendScreen = () => {
  const [isAllFriend, setIsAllFriend] = useState(true);

  return (
    <View className="flex-1 bg-black100">
      <View className="h-[70px] px-4 items-center">
        <View className="w-full h-[54px] space-x-3 p-[8px] flex flex-row rounded-full bg-white border-[1px] border-black200">
          <TouchableOpacity
            onPress={() => setIsAllFriend(true)}
            style={styles.button}
            className={`${isAllFriend ? 'bg-black900' : 'bg-white'}  rounded-full w-full h-full flex justify-center items-center`}>
            <Text className={`${isAllFriend ? 'text-white' : 'text-black500'} font-PTDSemiBold text-sm`}>모든 친구</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setIsAllFriend(false)}
            style={styles.button}
            className={`${!isAllFriend ? 'bg-black900' : 'bg-white'} rounded-full w-full h-full flex justify-center items-center`}>
            <Text className={`${!isAllFriend ? 'text-white' : 'text-black500'} font-PTDSemiBold text-sm`}>받은 친구 요청</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView className="px-4 pt-[4px]" contentContainerStyle={{ paddingBottom: 30 }}>
        <View className="bg-white rounded-2xl border-[1px] border-black200 overflow-hidden">
          {isAllFriend && [...Array(20)].map((_, idx) => <FriendItem key={idx} isFriend />)}
          {!isAllFriend && [...Array(20)].map((_, idx) => <FriendItem key={idx} isFriend={false} />)}
        </View>
      </ScrollView>
    </View>
  );
};

export default MyFriendScreen;

const styles = StyleSheet.create({
  button: {
    width: (width - 48 - 12) / 2,
  },
});
