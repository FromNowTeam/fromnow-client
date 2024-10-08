import React, { ReactNode, useEffect, useState } from 'react';
import { Text, TouchableOpacity, View, StyleProp, ViewStyle } from 'react-native';

type Color = 'black' | 'white' | 'yellow';

interface Props {
  onPress?: () => void;
  size?: string;
  color?: Color;
  disabled?: boolean;
  icon?: ReactNode;
  children: ReactNode;
  customStyle?: StyleProp<ViewStyle>;
}

const Button = ({ onPress, size = 'big', color = 'black', disabled = false, icon, customStyle, children }: Props) => {
  const [btnSize, setBtnSize] = useState<string[]>([]);
  const [btnColor, setBtnColor] = useState<string[]>([]);

  useEffect(() => {
    let tempSize: string[] = [];
    switch (size) {
      case 'big':
        tempSize = ['w-full', 'h-[48px]', 'rounded-2xl'];
        break;
      case 'mid':
        tempSize = ['w-[172px]', 'h-[48px]', 'rounded-2xl'];
        break;
      case 'small':
        tempSize = ['px-[15.5px]', 'h-[48px]', 'rounded-xl'];
        break;
      default:
        tempSize = ['w-full', 'h-[48px]', 'rounded-2xl'];
    }
    setBtnSize(tempSize);

    let tempColor: string[] = [];
    if (color === 'yellow') {
      setBtnColor(['border-kakao', 'bg-kakao', 'text-kakaoTxt']);
      return;
    }
    if (disabled) {
      tempColor = color === 'black' ? ['border-black300', 'bg-black200', 'text-black500'] : ['border-black300', 'bg-white', 'text-black300'];
    }
    if (!disabled) {
      tempColor = color === 'black' ? ['border-black900', 'bg-black900', 'text-white'] : ['border-black200', 'bg-white', 'text-black900'];
    }
    setBtnColor(tempColor);
  }, [size, color, disabled]);

  return (
    <TouchableOpacity
      style={customStyle}
      onPress={onPress}
      disabled={disabled}
      className={`${btnSize.join(' ')} ${btnColor[0]} ${btnColor[1]} border-[1px] flex justify-center items-center`}>
      <View className={`${size === 'big' ? 'gap-[10px]' : 'gap-[8px]'} flex flex-row justify-center items-center`}>
        <View>{icon && icon}</View>
        <Text className={`font-PTDSemiBold ${btnColor[2]} text-sm`}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
