import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Alert, Pressable, StyleSheet, Text, View} from 'react-native';
// import { CheckBoxBase } from "@react-native-community/checkbox";
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

const SignupScreen = () => {
  const navigation = useNavigation<NavigationProps>();

  const [allCheck, setAllCheck] = useState(false);
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);

  const [box1, setBox1] = useState(false);
  const [box2, setBox2] = useState(false);
  const [box3, setBox3] = useState(false);

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.title}>
          내 손을&nbsp;
          <Text style={{fontSize: 22, fontWeight: '900'}}>자바</Text>
        </Text>
      </View>
      <View style={styles.content}>
        <View>
          <View style={stylesContent1.content}>
            <Text style={stylesContent1.text}>회원가입</Text>
            <Text style={stylesContent1.box}>1/2</Text>
          </View>
          <Text style={{fontSize: 16, fontWeight: '900', marginBottom: 10}}>
            약관동의
          </Text>
          <View>
            <BouncyCheckbox
              style={stylesContent2.checkbox}
              size={22}
              fillColor="#364356"
              text="모두 동의하기"
              iconStyle={{
                borderRadius: 5,
              }}
              onPress={(isChecked: boolean) => {
                if (isChecked) {
                  setAllCheck(true);
                  setCheck1(true);
                  setCheck2(true);
                  setCheck3(true);
                } else {
                  setAllCheck(false);
                  setCheck1(false);
                  setCheck2(false);
                  setCheck3(false);
                }
              }}
              isChecked={allCheck}
            />
            <View style={styleHr.hr} />
            <View>
              <View style={stylesContent3.content}>
                <BouncyCheckbox
                  style={stylesContent2.checkbox}
                  size={22}
                  fillColor="#364356"
                  text="서비스 이용약관 (필수)"
                  iconStyle={{
                    borderRadius: 5,
                  }}
                  onPress={(isChecked: boolean) => {
                    if (isChecked) {
                      if (check2 && check3) setAllCheck(true);
                      setCheck1(true);
                    } else {
                      setCheck1(false);
                      setAllCheck(false);
                    }
                  }}
                  isChecked={check1}
                />
                {!box1 ? (
                  <Text
                    style={stylesContent3.text}
                    onPress={() => {
                      if (box1) setBox1(false);
                      else {
                        setBox1(true);
                        setBox2(false);
                        setBox3(false);
                      }
                    }}>
                    &#9660;
                  </Text>
                ) : (
                  <Text
                    style={stylesContent3.text}
                    onPress={() => {
                      if (box1) setBox1(false);
                      else {
                        setBox1(true);
                        setBox2(false);
                        setBox3(false);
                      }
                    }}>
                    &#9650;
                  </Text>
                )}
              </View>
              {box1 && <View style={stylesContent3.box}></View>}
              <View style={stylesContent3.content}>
                <BouncyCheckbox
                  style={stylesContent2.checkbox}
                  size={22}
                  fillColor="#364356"
                  text="개인정보 처리방침 (필수)"
                  iconStyle={{
                    borderRadius: 5,
                  }}
                  onPress={(isChecked: boolean) => {
                    if (isChecked) {
                      if (check1 && check3) setAllCheck(true);
                      setCheck2(true);
                    } else {
                      setCheck2(false);
                      setAllCheck(false);
                    }
                  }}
                  isChecked={check2}
                />
                {!box2 ? (
                  <Text
                    style={stylesContent3.text}
                    onPress={() => {
                      if (box2) setBox2(false);
                      else {
                        setBox2(true);
                        setBox1(false);
                        setBox3(false);
                      }
                    }}>
                    &#9660;
                  </Text>
                ) : (
                  <Text
                    style={stylesContent3.text}
                    onPress={() => {
                      if (box2) setBox2(false);
                      else {
                        setBox2(true);
                        setBox1(false);
                        setBox3(false);
                      }
                    }}>
                    &#9650;
                  </Text>
                )}
              </View>
              {box2 && <View style={stylesContent3.box}></View>}
              <View style={stylesContent3.content}>
                <BouncyCheckbox
                  style={stylesContent2.checkbox}
                  size={22}
                  fillColor="#364356"
                  text="마케팅 정보 수신 동의 (선택)"
                  iconStyle={{
                    borderRadius: 5,
                  }}
                  onPress={(isChecked: boolean) => {
                    if (isChecked) {
                      if (check1 && check2) setAllCheck(true);
                      setCheck3(true);
                    } else {
                      setCheck3(false);
                      setAllCheck(false);
                    }
                  }}
                  isChecked={check3}
                />
                {!box3 ? (
                  <Text
                    style={stylesContent3.text}
                    onPress={() => {
                      if (box3) setBox3(false);
                      else {
                        setBox3(true);
                        setBox1(false);
                        setBox2(false);
                      }
                    }}>
                    &#9660;
                  </Text>
                ) : (
                  <Text
                    style={stylesContent3.text}
                    onPress={() => {
                      if (box3) setBox3(false);
                      else {
                        setBox3(true);
                        setBox1(false);
                        setBox2(false);
                      }
                    }}>
                    &#9650;
                  </Text>
                )}
              </View>
              {box3 && <View style={stylesContent3.box}></View>}
            </View>
          </View>
        </View>
        <Pressable
          style={styles.footer}
          onPress={() => {
            navigation.navigate('SignupScreen2');
          }}>
          <View style={styles.button}>
            <Text style={styles.text}>다음으로</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#F4F5F9',
  },

  header: {
    width: '100%',
    padding: 21,
  },
  title: {
    fontSize: 18,
    fontWeight: '400',
  },

  content: {
    flex: 1,
    padding: 30,
    paddingTop: 0,
  },

  footer: {
    flex: 1,

    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  button: {
    width: '100%',
    height: 45,

    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 7,
    backgroundColor: '#FF4D4D',
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
});

const stylesContent1 = StyleSheet.create({
  content: {
    marginBottom: 40,

    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 18,
    fontWeight: '900',
  },
  box: {
    width: 41.54,
    height: 23.7,
    lineHeight: 22,

    color: '#fff',
    fontSize: 12,
    textAlign: 'center',

    borderRadius: 7,
    backgroundColor: '#364356',
  },
});

const stylesContent2 = StyleSheet.create({
  checkbox: {
    marginBottom: 10,
    borderRadius: 0,
  },
});

const stylesContent3 = StyleSheet.create({
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 22,
  },
  box: {
    width: '100%',
    height: 150,
    marginBottom: 10,

    borderWidth: 1,
    borderRadius: 7,
    borderColor: '#364356',
  },
});

const styleHr = StyleSheet.create({
  hr: {
    width: '100%',
    height: 1,
    marginBottom: 10,
    backgroundColor: '#364356',
  },
});

export default SignupScreen;
