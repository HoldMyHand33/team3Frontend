import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {Dispatch, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {RootStackParamList} from '../../../App';
import {LogoImage, LogoText} from '../../assets/svgs';
import SquareButton from '../../components/common/UI/SquareButton';
import Colors from '../../constants/Colors';
import Divider from './components/Divider';
import FindMyButton from './components/FindMyButton';
import Modal from './components/Modal';

interface Props {
  setIsLoggedIn: Dispatch<React.SetStateAction<boolean>>;
}

const InitialScreen = ({setIsLoggedIn}: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <SafeAreaProvider style={styles.screen}>
        <LogoText />
        <LogoImage />
        <View style={{alignSelf: 'stretch', alignItems: 'center'}}>
          <SquareButton
            text="이메일로 시작하기"
            containerStyle={{marginBottom: 20}}
            onPress={setIsModalOpen}
          />
          <FindMyButton />
        </View>
        <Text
          onPress={() => {
            setIsLoggedIn(true);
          }}>
          test
        </Text>
        <View style={{alignSelf: 'stretch', alignItems: 'center'}}>
          <Divider text="간편 로그인" />
          <SquareButton
            text="카카오 로그인"
            containerStyle={{backgroundColor: Colors.YELLO, marginTop: 28}}
            textStyle={{color: Colors.BLACK}}
          />
        </View>
      </SafeAreaProvider>
      {isModalOpen && (
        <Modal handleClose={setIsModalOpen} setIsLoggedIn={setIsLoggedIn} />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: Colors.WHITE,
    flex: 1,
    justifyContent: 'space-around',
    paddingHorizontal: 30,
    paddingVertical: 74,
  },
});

export default InitialScreen;
