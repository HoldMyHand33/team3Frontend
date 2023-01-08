import React, {Dispatch, SetStateAction, useState} from 'react';
import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

// import SquareButton from '../../../components/common/UI/SquareButton';
// import Colors from '../../../constants/Colors';
// import java from '../../../service/java';
// import {storeToken} from '../../../util/asyncStorage';
// import FindMyButton from './FindMyButton';

interface Props {
  handleClose: Dispatch<SetStateAction<boolean>>;
  setIsLoggedIn: Dispatch<React.SetStateAction<boolean>>;
}

const Modal2 = ({setTF, setIsModalOpen2}: any) => {

  return (
    <Pressable style={styles.container} >
      <View style={styles.modal}>
        <Text style={styles.text}>교환 일기를 신청하시겠어요?</Text>
        <Text style={styles.text2}>교환 일기 대상</Text>
        <TextInput
          style={[styles.input, {marginBottom: 17}]}
        //   onChangeText={setPassword}
        //   value={password}
        //   secureTextEntry={true}ddd
          placeholder="닉네임"
        />
        <Pressable 
            style={styles.footer}
            onPress={()=>{ setTF(false); setIsModalOpen2(false); }}>
            <View style={styles.button}>
                <Text style={styles.text3}>저장하기</Text>
            </View>
        </Pressable>
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
    // borderColor: Colors.BORDER_COLOR,
    borderRadius: 8,
    borderWidth: 1,
    height: 40,
    paddingHorizontal: 12,
  },
  modal: {
    alignItems: 'center',
    // backgroundColor: Colors.WHITE,
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
    
    backgroundColor: '#fff',
  },
  text: {
    alignSelf: 'flex-start',
    // color: Colors.BLACK,
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 30,
  },
  text2: {
    alignSelf: 'flex-start',
    // color: Colors.BLACK,
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 10,
  },

  footer: {
    flex: 1,
    // margin: 15,
    marginBottom: 30,

    flexDirection:'row',
    alignItems:'flex-end',

  },
  button: {
    width:'100%',
    height: 45,

    // justifyContent: "center",
    // alignItems: "center",

    borderRadius: 7,
    backgroundColor: '#FF4D4D',
  },
  text3: {
    lineHeight: 45,
    textAlign: 'center',

    color: '#fff',
  },
});

export default Modal2;
