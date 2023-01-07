import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

import {RootStackParamList} from '../../../../App';
import Colors from '../../../constants/Colors';

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

const FindMyButton = () => {
  const navigate = useNavigation<NavigationProps>();
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigate.navigate('SignupScreen')}>
        <Text style={styles.text}>회원가입</Text>
      </Pressable>
      <Text style={styles.text}>|</Text>
      <Pressable>
        <Text style={styles.text}>아이디ㆍ비밀번호 찾기</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 14,
    justifyContent: 'space-between',
    width: 184,
  },
  text: {color: Colors.BLACK, fontSize: 12},
});

export default FindMyButton;
