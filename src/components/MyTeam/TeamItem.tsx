import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import profilePng from '@assets/png/profile.png';
import { MyTeamRequest } from '@clientTypes/user';
import PlusIcon from '@assets/icons/PlusIcon';
import { useAcceptTeam } from '@hooks/query';

const TeamItem = (props: MyTeamRequest) => {
  const { diaryId, diaryTitle } = props;
  const imgList = [
    profilePng,
    profilePng,
    profilePng,
    profilePng,
    profilePng,
    profilePng,
    profilePng,
    profilePng,
    profilePng,
    profilePng,
    profilePng,
    profilePng,
    profilePng,
    profilePng,
  ];

  const { acceptTeamMutation } = useAcceptTeam();
  const addTeam = () => {
    acceptTeamMutation.mutate(diaryId);
  };

  return (
    <View className="h-[94px] rounded-2xl bg-white w-full flex flex-row justify-between items-center p-4">
      <View className="space-y-3">
        <View className="flex flex-row">
          {imgList.slice(0, 8).map((_, idx) => (
            <View
              key={idx}
              className={`${idx === 0 ? 'ml-0' : 'ml-[-12px]'} w-[36px] h-[36px] border-[1px] border-black200 rounded-xl overflow-hidden`}>
              <Image source={profilePng} className="w-[36px] h-[36px]" resizeMode="cover" />
            </View>
          ))}
          {imgList.length > 8 && (
            <View className="w-[36px] h-[36px] ml-[-12px] rounded-[12px] border-[1px] border-black200 flex flex-row bg-black100 justify-center items-center">
              <PlusIcon size={13.5} color="#B3B4B9" />
              <Text className="text-black500 font-PTDLight text-[15px]">{imgList.length - 8}</Text>
            </View>
          )}
        </View>
        <Text className="text-black900 text-sm font-PTDLight">{diaryTitle}</Text>
      </View>
      <TouchableOpacity onPress={addTeam} className="bg-black900 h-9 w-[74px] flex justify-center items-center rounded-xl">
        <Text className="text-sm font-PTDSemiBold text-white">모임추가</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TeamItem;
