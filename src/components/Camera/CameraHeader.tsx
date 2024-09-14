import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import useNavi from '@hooks/useNavi';
import LeftArrowIcon from '@assets/icons/leftArrow.svg';
import CycleIcon from '@assets/icons/cycle.svg';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props {
  toggleCameraType: () => void;
}

const CameraHeader = ({ toggleCameraType }: Props) => {
  const { navigation } = useNavi();
  const insets = useSafeAreaInsets();

  return (
    <View style={{ top: insets.top }} className="absolute px-[8px] h-[66px] w-full flex flex-row items-center justify-between z-10">
      <TouchableOpacity onPress={() => navigation.goBack()} className="w-[44px] h-[44px] p-[10px]">
        <LeftArrowIcon />
      </TouchableOpacity>
      <Text className="text-black900 text-base font-PTDSemiBold">카메라 촬영</Text>
      <TouchableOpacity onPress={toggleCameraType} className="w-[44px] h-[44px] p-[12px]">
        <CycleIcon />
      </TouchableOpacity>
    </View>
  );
};

export default CameraHeader;
