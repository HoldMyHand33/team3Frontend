import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  Alert,
  Pressable,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
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
  //로딩 창
  const [isLaoding, setIsLoading] = useState(false);
  //dispatch 가져오기
  const dispatch = useAppDispatch();
  // state 가져오기
  const email = useSelector((state: RootState) => state.exam.email);
  useEffect(() => {
    async function getMoney() {
      //get으로 받아오는 타입은 알수 없기 때문에 get옆에 무슨 타입이 오는지 명시 해줘야 한다.
      //axios.get<{data: number}> get으로 받아오는 타입은
      //response.data.data 숫자 타입 :: data 숫자 타입
      const response = await axios.get<{data: number}>(`/showmethemoney`, {
        headers: {authorization: `Bearer ${email}`},
      });
      dispatch(exampleSlice.actions.setUser(response.data.data));
    }
    getMoney();
  }, [dispatch]);
  return (
    <>
      <View>
        {/*axios 통신 중일 때는 뺑글뺑글돌아가는 버튼 생김*/}
        {isLaoding ? (
          <ActivityIndicator color="blue" />
        ) : (
          <Pressable
            style={{backgroundColor: 'blue'}}
            //axios 통신 중일 때 버튼을 여러번 눌러 요청 할 수 없도록 disabled를 적용한다.
            disabled={isLaoding}>
            <Text>버튼</Text>
          </Pressable>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  loginButton: {
    backgroundColor: 'gray',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  loginButtonActive: {
    backgroundColor: 'blue',
  },
});

export default Four;
