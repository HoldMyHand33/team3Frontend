import React, {useCallback, useEffect, useState} from 'react';
import {View, FlatList, Text} from 'react-native';
import {FourFive} from '../../App';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import {RootState} from '../store/reducer';
import axios, {AxiosError} from 'axios';
import exampleSlice from '../slices/example';
import {useAppDispatch} from '../store';
// 이메일, 비밀번호를 둘다 입력해야 버튼 활성화
// 스택 라우터
type Fourtype = NativeStackScreenProps<FourFive, 'Four'>;
function Four({navigation}: Fourtype) {
  const [orders, setOder] = useState([
    {
      name: 'ㄱㅈㅎ',
      example: 'ㄱㄴㄷ',
      orderId: 1,
    },
    {
      name: 'ㅇㅎㄹ',
      example: 'ㅇㅎㄹ',
      orderId: 2,
    },
  ]);

  interface iOrder {
    name: string;
    example: string;
    orderId: number;
  }
  // 주의!!! {item} 객체 안의 item으로 사용해야함!!
  const renderItem = useCallback(({item}: {item: iOrder}) => {
    return (
      <View key={item.orderId}>
        <Text>{item.name}</Text>
        <Text>{item.example}</Text>
      </View>
    );
  }, []);
  return (
    <>
      <View>
        <FlatList
          //실제 데이터(data : 보여줄 배열목록)
          data={orders}
          //keyExtractor : 배열 하나씩의 id 값
          //keyExtractor={item => item.orderId} 인덱스 계산해주기!!왜 에러
          //랜더링 할거
          //renderItem : map 함수 부분이라고 생각하면 됨 랜더링 할 거
          renderItem={renderItem}
        />
      </View>
    </>
  );
}

export default Four;
