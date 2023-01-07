import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Colors from '../../../constants/Colors';
import SquareButton from '../../../components/common/UI/SquareButton';
import FindMyButton from './FindMyButton';
import {Dispatch, SetStateAction} from 'react';

interface Props {
  handleClose: Dispatch<SetStateAction<boolean>>;
}

const Modal = ({handleClose}: Props) => {
  const handleCloseModal = (event: GestureResponderEvent) => {
    handleClose(false);
  };

  return (
    <Pressable style={styles.container} onPress={handleCloseModal}>
      <View style={styles.modal}>
        <Text style={styles.text}>로그인</Text>
        <TextInput
          style={[styles.input, {marginBottom: 13}]}
          placeholder="이메일"
        />
        <TextInput
          style={[styles.input, {marginBottom: 17}]}
          placeholder="비밀번호"
        />
        <SquareButton text="로그인" containerStyle={{marginBottom: 17}} />
        <FindMyButton />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: 10,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(52, 52, 52, 0.3)',
  },
  modal: {
    zIndex: 20,
    backgroundColor: Colors.WHITE,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 42,
    paddingTop: 44,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    height: 360,
    alignItems: 'center',
  },
  text: {
    alignSelf: 'flex-start',
    fontSize: 18,
    fontWeight: '700',
    color: Colors.BLACK,
    marginBottom: 30,
  },
  input: {
    height: 40,
    alignSelf: 'stretch',
    borderColor: Colors.BORDER_COLOR,
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 12,
  },
});

export default Modal;
