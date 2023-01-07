import React, {Dispatch, SetStateAction, useState} from 'react';
import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import {storeToken} from '../../../util/asyncStorage';

interface Props {
  handleClose: Dispatch<SetStateAction<boolean>>;
  setIsLoggedIn: Dispatch<React.SetStateAction<boolean>>;
}

const Modal = ({handleClose, setIsLoggedIn}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const test = () => {
    setIsLoggedIn(true);
  };

  const login = async (enteredEmail: string, enteredPassword: string) => {
    const {data} = await java.login(enteredEmail, enteredPassword);
    if (!data.data) {
      return;
    }
    storeToken(data.data.accessToken);
    setIsLoggedIn(true);
  };

  const handleCloseModal = (event: GestureResponderEvent) => {
    handleClose(false);
  };

  const handleSubmit = () => {
    login(email, password);
  };

  return (
    <Pressable style={styles.container} onPress={handleCloseModal}>
      <View style={styles.modal}>
        <Text style={styles.text}>로그인</Text>
        <TextInput
          style={[styles.input, {marginBottom: 13}]}
          onChangeText={setEmail}
          value={email}
          placeholder="이메일"
        />
        <TextInput
          style={[styles.input, {marginBottom: 17}]}
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
          placeholder="비밀번호"
        />
        <SquareButton
          text="로그인"
          containerStyle={{marginBottom: 17}}
          onSubmit={handleSubmit}
        />
        <FindMyButton />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(52, 52, 52, 0.3)',
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 10,
  },
  input: {
    alignSelf: 'stretch',
    borderColor: Colors.BORDER_COLOR,
    borderRadius: 8,
    borderWidth: 1,
    height: 40,
    paddingHorizontal: 12,
  },
  modal: {
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    bottom: 0,
    height: 360,
    left: 0,
    paddingHorizontal: 42,
    paddingTop: 44,
    position: 'absolute',
    right: 0,
    zIndex: 20,
  },
  text: {
    alignSelf: 'flex-start',
    color: Colors.BLACK,
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 30,
  },
});

export default Modal;
