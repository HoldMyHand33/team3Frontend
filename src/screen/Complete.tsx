import * as React from 'react';
import {View, Text, Dimensions, StyleSheet, Pressable} from 'react-native';

const appWidth = Dimensions.get('window').width * 0.8;

function Complete() {
  return (
    <>
      <View style={styles.screen}>
        <View style={styles.imageView}>
          <View
            style={{
              alignItems: 'center',
              marginBottom: 25,
            }}>
            {/* <Image source={require('./src/assets/image/one.jpg')} /> */}
          </View>
          {/* <Image source={require('./src/assets/image/two.jpg')} /> */}
        </View>
        <View style={{flex: 2}}>
          <Text style={styles.WelcomeText}>회원가입을 환영합니다.</Text>
          <View style={{flex: 1, alignItems: 'center', marginTop: 20}}>
            <View>
              <Text>내 손을 자바와 함께</Text>
            </View>
            <Text>소중한 사람과의 인연을 높치지 마세요.</Text>
          </View>
        </View>
        <Pressable style={styles.ButtonStyle}>
          <Text style={{color: 'white'}}>내손을 잡아 시작하기</Text>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  ButtonStyle: {
    borderRadius: 5,
    width: appWidth,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#FF4D4D',
  },
  WelcomeText: {
    fontWeight: '900',
    fontSize: 20,
  },
  screen: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'white',
  },
  imageView: {
    flex: 4,
    justifyContent: 'center',
  },
});

export default Complete;
