import React, {useCallback, useRef, useState} from 'react';
import {View, Text, TextInput, Pressable, StyleSheet} from 'react-native';
import {FourFive} from '../../App';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

// 이메일, 비밀번호를 둘다 입력해야 버튼 활성화
// 스택 라우터
type Fourtype = NativeStackScreenProps<FourFive, 'Four'>;
function Four({navigation}: Fourtype) {
  const [eamil, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const eamilRef = useRef<TextInput | null>(null);
  const passRef = useRef<TextInput | null>(null);
  const changeEmail = useCallback((Text: string) => {
    setEmail(Text);
  }, []);
  const changePass = useCallback((Text: string) => {
    setPass(Text);
  }, []);

  const canGoNext = eamil && pass;
  return (
    <>
      <View>
        <Text>이메일</Text>
        <TextInput
          placeholder="이메일을 입력해주세요"
          placeholderTextColor="#666"
          // 이메일 자동 완성
          importantForAutofill="yes"
          autoComplete="email"
          textContentType="emailAddress"
          //키패드 바꾸기
          returnKeyType="next"
          clearButtonMode="while-editing"
          //키보드를 내리지 않겠다는 옵션임
          blurOnSubmit={false}
          value={eamil}
          onChangeText={changeEmail}
          ref={eamilRef}
          //엔터 눌렀을때 포커징 패쓰워드 인풋으로 옮겨라
          onSubmitEditing={() => {
            passRef.current?.focus();
          }}
        />
      </View>
      <View>
        <Text>비밀번호</Text>
        <TextInput
          placeholder="비밀번호를 입력해주세요(영문,숫자,특수문자)"
          placeholderTextColor="#666"
          //패쓰워드 자동 완성
          importantForAutofill="yes"
          autoComplete="password"
          textContentType="password"
          secureTextEntry
          returnKeyType="send"
          clearButtonMode="while-editing"
          value={pass}
          onChangeText={changePass}
          //ref 연결
          ref={passRef}
        />
      </View>
      <View>
        <Pressable
          style={
            canGoNext
              ? [styles.loginButton, styles.loginButtonActive]
              : styles.loginButton
          }
          disabled={!canGoNext}
        />
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
