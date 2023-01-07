import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Image, StyleSheet, Text, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {RootStackParamList} from '../../../App';
import Colors from '../../constants/Colors';
import {LogoImage, LogoText} from '../../assets/svgs';
import SquareButton from '../../components/common/UI/SquareButton';
import FindMyButton from './components/FindMyButton';
import Divider from './components/Divider';
import {useState} from 'react';
import Modal from './components/Modal';

export type LoginScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'InitialScreen'
>;

const InitialScreen = () => {
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
        <View style={{alignSelf: 'stretch', alignItems: 'center'}}>
          <Divider text="간편 로그인" />
          <SquareButton
            text="카카오 로그인"
            containerStyle={{backgroundColor: Colors.YELLO, marginTop: 28}}
            textStyle={{color: Colors.BLACK}}
          />
        </View>
      </SafeAreaProvider>
      {isModalOpen && <Modal handleClose={setIsModalOpen} />}
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingVertical: 74,
    alignSelf: 'stretch',
    backgroundColor: Colors.WHITE,
    alignItems: 'center',
    paddingHorizontal: 30,
    justifyContent: 'space-around',
  },
});

export default InitialScreen;
