import React, {useCallback, useRef, useState} from 'react';
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
// 이메일, 비밀번호를 둘다 입력해야 버튼 활성화
// 스택 라우터
type Fourtype = NativeStackScreenProps<FourFive, 'Four'>;
function Four({navigation}: Fourtype) {
  // 로딩
  const [isLaoding, setIsLoading] = useState(false);
  // state 가져오기
  const email = useSelector((state: RootState) => state.exam.email);
  const name = useSelector((state: RootState) => state.exam.name);
  // 서버에 데이터 전송
  const onSubmit = useCallback(async () => {
    try {
      // 비동기 작업하기 전에 로딩을 true로 변경
      setIsLoading(true);
      // 비동기니까 await
      const response = await axios.post(
        // 첫번째 : 통신 주소
        '/user',
        // 두번째 : 보낼 데이터
        {email, name},
        // 세번째 : 헤더 주로 토큰을 보냄
        {headers: {authorization: `Bearer`}},
      );
    } catch (error) {
      //axios 에러 타입을 넣어줘야 함
      const errorResponse = (error as AxiosError).response;
      // 에러가 발생하면 Alert 창 띄우기
      if (errorResponse) {
        Alert.alert('알람', (errorResponse.data as any).message);
      }
    } finally {
      //로딩 없애기
      setIsLoading(false);
    }
  }, [isLaoding, email, name]);
  return (
    <>
      <View>
        {/*axios 통신 중일 때는 뺑글뺑글돌아가는 버튼 생김*/}
        {isLaoding ? (
          <ActivityIndicator color="blue" />
        ) : (
          <Pressable
            style={{backgroundColor: 'blue'}}
            onPress={onSubmit}
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
