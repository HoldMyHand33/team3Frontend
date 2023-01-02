import React, {useCallback, useRef, useState} from 'react';
import {View, Text, TextInput, Pressable, StyleSheet} from 'react-native';
import {FourFive} from '../../App';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import {RootState} from '../store/reducer';
import {useAppDispatch} from '../store';
import exampleSlice from '../slices/example';
// 이메일, 비밀번호를 둘다 입력해야 버튼 활성화
// 스택 라우터
type Fourtype = NativeStackScreenProps<FourFive, 'Four'>;
function Four({navigation}: Fourtype) {
  // state 가져오기
  const email = useSelector((state: RootState) => state.exam.email);
  const name = useSelector((state: RootState) => state.exam.name);
  // state 변경
  const dispatch = useAppDispatch();
  return (
    <>
      <View>
        <Text>{email}</Text>
        <Text>{name}</Text>
        <Pressable
          style={{backgroundColor: 'blue'}}
          onPress={() => {
            dispatch(
              exampleSlice.actions.setUser({
                email: '변경',
                name: '변경',
              }),
            );
          }}>
          <Text>버튼</Text>
        </Pressable>
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
