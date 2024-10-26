import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import HeartIcon from '@assets/icons/HeartIcon';
import { Board } from '@clientTypes/board';
import { formatTime } from '@utils/formatDate';
import { useDisLikeBoard, useLikeBoard } from '@hooks/query';

interface Props extends Board {
  diaryId: number;
  date: string;
}

const BoardItem = (props: Props) => {
  const { diaryId, date, boardId, createdDate, profilePhotoUrl, profileName, contentPhotoUrl, content, likes, liked } = props;

  const { likeBoardMutation } = useLikeBoard({ diaryId, boardId, date });
  const { disLikeBoardMutation } = useDisLikeBoard({ diaryId, boardId, date });
  const toggleLike = () => {
    if (!liked) {
      likeBoardMutation.mutate(boardId);
      return;
    }
    if (likes <= 0) return;
    disLikeBoardMutation.mutate(boardId);
  };

  return (
    <View className="space-y-3 p-4 bg-white border-[1px] border-black200 rounded-3xl">
      <View className="flex flex-row space-x-[8px] h-[36px] items-center">
        <View className="w-[36px] h-[36px] border-[1px] border-black200 rounded-xl overflow-hidden">
          <Image source={{ uri: profilePhotoUrl }} className="w-[36px] h-[36px] rounded-xl" resizeMode="cover" />
        </View>
        <Text className="text-black900 text-sm font-PTDLight">{profileName}</Text>
      </View>
      <View className="w-full h-[311px] rounded-xl overflow-hidden">
        <Image source={{ uri: contentPhotoUrl }} className="w-full h-[311px] rounded-xl" resizeMode="cover" />
      </View>
      <View className="h-[42px] space-y-[6px]">
        <TouchableOpacity onPress={toggleLike} className="w-[24px] h-[24px] flex justify-center items-center">
          <HeartIcon color={liked ? '#FEC7C6' : '#E4E5EA'} />
        </TouchableOpacity>
        <Text className="text-black900 text-[12px] font-PTDLight">좋아요 {likes}개</Text>
      </View>
      <View>
        <Text className="text-black900 font-UhBee text-xl leading-[20px] mt-[4px]">{content}</Text>
      </View>
      <Text className="text-black400 font-PTDLight text-[12px]">{formatTime(createdDate)}</Text>
    </View>
  );
};

export default BoardItem;
