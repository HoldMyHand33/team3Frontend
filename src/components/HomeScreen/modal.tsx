import React, {Dispatch, SetStateAction, useState} from 'react';
import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import Colors from '../../constants/Colors';
import SquareButton from '../common/UI/SquareButton';

interface Props {
  handleClose: Dispatch<SetStateAction<boolean>>;
  setChange: Dispatch<SetStateAction<boolean>>;
}

const Modal = ({handleClose, setChange}: Props) => {
  const handleCloseModal = (event: GestureResponderEvent) => {
    handleClose(false);
  };

  return (
    <Pressable style={styles.container} onPress={handleCloseModal}>
      <View style={styles.modal}>
        <Text style={styles.title}>오늘 화해를 결심하시겠어요?</Text>
        <Text style={styles.label}>화해 결심일</Text>
        <View style={styles.box}>
          <Text style={{paddingHorizontal: 10}}>2023년 01월 08일</Text>
        </View>
        <SquareButton text="결심하기" onPress={(e: any)=> {
          handleCloseModal(e)
          setChange(false);
        }}/>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  box: {
    alignSelf: 'stretch',
    borderColor: Colors.BLACK,
    borderRadius: 5,
    borderWidth: 1,
    height: 45,
    justifyContent: 'center',
    marginBottom: 64,
  },
  container: {
    backgroundColor: 'rgba(52, 52, 52, 0.3)',
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 10,
  },
  label: {
    alignSelf: 'flex-start',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 16,
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
  title: {
    alignSelf: 'flex-start',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 46,
  },
});

export default Modal;
