import React from 'react';
import { login } from '@react-native-kakao/user';
import KakaoIcon from '@assets/icons/kakao.svg';
import Button from '@components/common/Button';
import useToast from '@hooks/useToast';
import { useSignInSocial } from '@hooks/query';
import { useDebounce } from '@hooks/useOptimization';

const KakaoSignInBtn = () => {
  const { errorToast } = useToast();
  const signInMutation = useSignInSocial();

  const signInWithKakao = async () => {
    try {
      const res = await login();
      const accessToken = res.accessToken;
      signInMutation.mutate({ path: 'kakao', token: accessToken });
    } catch (error) {
      errorToast('Kakao login failed:', error);
    }
  };

  const debounceSignInWithKakao = useDebounce(signInWithKakao, 500);

  return (
    <Button onPress={debounceSignInWithKakao} color="yellow" icon={<KakaoIcon />}>
      Kakao로 로그인하기
    </Button>
  );
};

export default KakaoSignInBtn;
