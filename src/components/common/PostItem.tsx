import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import profilePng from '@assets/png/profile.png';
import postJpg from '@assets/jpg/post.jpg';
import HeartIcon from '@assets/icons/heart.svg';

const PostItem = () => {
  return (
    <View className="space-y-3 p-4 bg-white border-[1px] border-black200 rounded-3xl">
      <View className="flex flex-row space-x-[8px] h-[36px] items-center">
        <View className="w-[36px] h-[36px] border-[1px] border-black200 rounded-xl overflow-hidden">
          <Image source={profilePng} className="w-[36px] h-[36px] rounded-xl" resizeMode="cover" />
        </View>
        <Text className="text-black900 text-sm font-PTDLight">채순</Text>
      </View>
      <View className="w-full h-[311px] rounded-xl overflow-hidden">
        <Image source={postJpg} className="w-full h-[311px] rounded-xl" resizeMode="cover" />
      </View>
      <View className="h-[42px] space-y-[6px]">
        <TouchableOpacity>
          <HeartIcon />
        </TouchableOpacity>
        <Text className="text-black900 text-[12px] font-PTDLight">좋아요 1개</Text>
      </View>
      <View>
        <Text className="text-black900 font-UhBee text-xl">둥근해 미친거 또 떴네</Text>
      </View>
      <Text className="text-black400 font-PTDLight text-[12px]">00:00:00</Text>
    </View>
  );
};

export default PostItem;