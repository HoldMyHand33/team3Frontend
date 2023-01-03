import React, {useCallback, useEffect, useState} from 'react';
import {View, FlatList, Text} from 'react-native';
import {FourFive} from '../../App';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import EncryptedStorage from 'react-native-encrypted-storage';
import {useSelector} from 'react-redux';
import {RootState} from '../store/reducer';
import axios, {AxiosError} from 'axios';
import exampleSlice from '../slices/example';
import {useAppDispatch} from '../store';
// 이메일, 비밀번호를 둘다 입력해야 버튼 활성화
// 스택 라우터
type Fourtype = NativeStackScreenProps<FourFive, 'Four'>;
function Four({navigation}: Fourtype) {
  const dispatch = useAppDispatch();
  useEffect(() => {
    // axios의 인터셉터 : axios 요청을 할때 마다 매번 실행되는 함수
    axios.interceptors.response.use(
      //성공했을때 호출되는 함수
      response => {
        // 성공했을때는 그냥 넘어가라!
        return response;
      },
      //에러가 났을 때 호출되는 함수
      async error => {
        const {
          config,
          response: {status},
        } = error;
        //에러난 값을 구조 분해해서 가져옴 error.response.status
        // status== 419

        if (status === 419) {
          if (error.response.data.code === 'expired') {
            const originalRequest = config;
            //암호화된 토큰 가져옴 오래가는거
            const refreshToken = await EncryptedStorage.getItem('refreshToken');
            // post token refresh 요청
            const {data} = await axios.post(
              `/refreshToken`, // token refresh api
              {},
              {headers: {authorization: `Bearer ${refreshToken}`}},
            );
            // 새로운 토큰 저장
            dispatch(exampleSlice.actions.setUser(data.data.token));
            // 419로 요청 실패했던 요청 다시 요청하기 (새로운 토큰으로 재요청)
            originalRequest.headers.authorization = `Bearer ${data.data.accessToken}`;
            return axios(originalRequest);
          }
        }
        //status === 419 에러가 아닐 때
        //이 에러아닐때는 그냥 에러 나겠다
        // 안적은 부분은 다른 axios의 catch 부분으로 돌아감
        return Promise.reject(error);
      },
    );
  }, [dispatch]);
  return (
    <>
      <View></View>
    </>
  );
}

export default Four;
