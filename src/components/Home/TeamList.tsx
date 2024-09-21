import React from 'react';
import { FlatList, View } from 'react-native';
import PlusIcon from '@assets/icons/PlusIcon';
import TeamFolder, { Color } from '@components/common/TeamFolder';
import Button from '@components/common/Button';
import { Team } from '@screens/HomeScreen';
import useNavi from '@hooks/useNavi';
import FadeIn from '@components/common/FadeIn';

interface Props {
  teamList: Team[];
  colors: Color[];
}

function TeamList({ teamList, colors }: Props) {
  const { navigation } = useNavi();

  return (
    <View className="flex w-full items-center flex-1">
      <FlatList
        data={teamList}
        className="w-full"
        keyExtractor={team => team.id.toString()}
        renderItem={({ item, index }) => (
          <View className={`${index % 2 !== 0 ? 'mr-0' : 'mr-[18px]'}`}>
            <TeamFolder {...item} color={colors[index % colors.length]} />
          </View>
        )}
        ItemSeparatorComponent={() => <View style={{ width: 18, height: 18 }} />}
        contentContainerStyle={{
          position: 'relative',
          paddingHorizontal: 18,
          paddingTop: 16,
          paddingBottom: 6,
          alignItems: 'center',
        }}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={
          <View className="mb-[25px] w-full items-center pt-[18px] pb-[130px]">
            <Button onPress={() => navigation.navigate('TeamCreate')} size="mid" color="white" icon={<PlusIcon color="#1C1C1E" />}>
              모임 생성하기
            </Button>
          </View>
        }
        numColumns={2}
      />
    </View>
  );
}

export default TeamList;
