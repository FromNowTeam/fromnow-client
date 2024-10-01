import React, { useState } from 'react';
import { ScrollView, View, TouchableOpacity, Text, StyleSheet, Dimensions, RefreshControl } from 'react-native';
import FriendItem from '@components/common/FriendItem';
import AvatarSadMsg from '@components/common/AvatarSadMsg';
import Button from '@components/common/Button';
import MiniLoading from '@components/common/MiniLoading';
import SearchIcon from '@assets/icons/SearchIcon';
import { QUERY_KEY, useGetAllMyFriend, useGetAllMyFriendRequest, useKey } from '@hooks/query';
import { Friend } from '@clientTypes/user';
import useNavi from '@hooks/useNavi';
import useRefresh from '@hooks/useRefresh';

const { width } = Dimensions.get('window');

const MyFriendScreen = () => {
  const [isAllFriend, setIsAllFriend] = useState(true);
  const { navigation } = useNavi();

  const { data: myFriendData, isLoading: isLoadingMyFriend } = useGetAllMyFriend();
  const { data: myFriendRqData, isLoading: isLoadingFriendRq } = useGetAllMyFriendRequest();
  let data: Friend[] = isAllFriend ? myFriendData : myFriendRqData;
  let queryKey = isAllFriend ? useKey([QUERY_KEY.MY, 'friends']) : useKey([QUERY_KEY.MY, 'friend', 'request']);
  const { refreshing, onRefresh } = useRefresh({ queryKey });

  if (isLoadingMyFriend || isLoadingFriendRq) return <MiniLoading />;

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
            className={`${isAllFriend ? 'bg-white' : 'bg-black900'} rounded-full w-full h-full flex justify-center items-center`}>
            <Text className={`${!isAllFriend ? 'text-white' : 'text-black500'} font-PTDSemiBold text-sm`}>받은 친구 요청</Text>
          </TouchableOpacity>
        </View>
      </View>
      {data?.length > 0 && (
        <ScrollView
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
          className="px-4 pt-[4px]"
          contentContainerStyle={{ paddingBottom: 30 }}>
          <View className="bg-white rounded-2xl border-[1px] border-black200 overflow-hidden">
            {data.map((friend, idx) => (
              <FriendItem key={idx} {...friend} />
            ))}
          </View>
        </ScrollView>
      )}
      {data?.length === 0 && (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
          <View className="w-full h-full justify-center items-center transfrom translate-y-[-136px]" pointerEvents="box-none">
            <AvatarSadMsg message={isAllFriend ? `아직 친구가 없어요\n새로운 친구를 찾아보세요!` : `아직 받은\n친구 요청이 없어요`} />
            <View className="mt-[24px]">
              <Button onPress={() => navigation.navigate('Search')} size="mid" icon={<SearchIcon color="#fff" size={24} />}>
                친구 찾아보기
              </Button>
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default MyFriendScreen;

const styles = StyleSheet.create({
  button: {
    width: (width - 48 - 12) / 2,
  },
});
