import {Pressable, StyleSheet, Text, View} from 'react-native';
import Colors from '../../constants/Colors';

const FindMyButton = () => {
  return (
    <View style={styles.container}>
      <Pressable>
        <Text style={[styles.text]}>회원가입</Text>
      </Pressable>
      <Text style={[styles.text]}>|</Text>
      <Pressable>
        <Text style={[styles.text]}>아이디ㆍ비밀번호 찾기</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 184,
  },
  text: {fontSize: 12, color: Colors.BLACK},
});

export default FindMyButton;
