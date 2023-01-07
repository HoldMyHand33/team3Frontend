import * as React from 'react';
import {Dimensions, Pressable, StyleSheet, Text, View} from 'react-native';

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
    alignItems: 'center',
    backgroundColor: '#FF4D4D',
    borderRadius: 5,
    height: 45,
    justifyContent: 'center',
    marginBottom: 20,
    width: appWidth,
  },
  WelcomeText: {
    fontSize: 20,
    fontWeight: '900',
  },
  imageView: {
    flex: 4,
    justifyContent: 'center',
  },
  screen: {
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
  },
});

export default Complete;
