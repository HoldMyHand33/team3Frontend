import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import axios, {AxiosError} from 'axios';
import * as React from 'react';
import {useCallback, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Alert,
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import {RootStackParamList} from '../../App';

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;
const appWidth = Dimensions.get('window').width;
const height = Dimensions.get('window').height * 0.55;
export default function Join() {
  const navigation = useNavigation<NavigationProps>();
  const [next, setNext] = useState(false);
  // 이름
  const [name, setName] = useState('');
  const [nameCheck, setnameCheck] = useState(false);
  // 이메일
  const [email, setEmail] = useState('');
  // 이메일
  const [emailChecks, setemailCheck] = useState(false);
  //패쓰워드
  const [passwordInput, setPasswordInput] = useState('');
  const emailCheck = useCallback(async () => {
    try {
      const response = await axios.post('/api/members/login', {
        email: 'jimin112688@gmail.com',
        password: 'rejin0421',
      });
      console.log(response);
      if (response) {
      }
    } catch (error) {
    } finally {
    }
  }, []);
  const onSubmit = useCallback(async () => {
    try {
      const response = await axios.post('/user', {name});
      if (response) {
      }
    } catch (error) {
    } finally {
    }
  }, [name]);
  const [phone, setPhone] = useState('');
  const [passRegEx, setPassRegEx] = useState(false);
  const [repassword, setRepassword] = useState('');
  const [repassCheck, setRepassCheck] = useState(false);
  return (
    <>
  <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.title}>
          내 손을&nbsp;
          <Text style={{fontSize: 22, fontWeight: '900'}}>자바</Text>
        </Text>
      </View>
      <View style={styles.content}>
          <View style={stylesContent1.content}>
            <Text style={stylesContent1.text}>회원가입</Text>
            <Text style={stylesContent1.box}>2/2</Text>
          </View>
          <KeyboardAvoidingView
          style={{flex: 1, alignItems: 'center'}}>
          <View style={{height: height * 0.3}}>
            <View>
              <Text style={{fontSize: 15, fontWeight: 'bold', color: 'black'}}>
                이메일
              </Text>
            </View>
            <View style={styles.TextView}>
              <View>
                <TextInput
                  value={email}
                  onChangeText={(text: string) => {
                    setEmail(text);
                  }}
                  style={{
                    width: 220,
                    height: 35,
                    borderRadius: 8,
                    borderWidth: 1,
                    borderColor: 'gray',
                  }}
                />
              </View>
              <View style={{flexDirection: 'column', justifyContent: 'center'}}>
                <Pressable
                  style={styles.ButtonStyle}
                  onPress={async () => {
                    const response = await axios.post(
                      'http://team3holdmyhand-springboot.ap-northeast-2.elasticbeanstalk.com/api/members/email',
                      {
                        email: email,
                      },
                    );
                    if (response.data.data) {
                      Alert.alert('아이디 중복', '아이디가 중복 되었습니다.');
                    } else {
                      setNext(true);
                      Alert.alert('아이디 중복', '이메일이 사용가능 합니다.');
                    }
                  }}>
                  <Text style={{color: 'white'}}>중복 확인</Text>
                </Pressable>
              </View>
            </View>
          </View>
          <View style={{}}>
            <View style={styles.TextView}>
              <Text style={{fontSize: 17, fontWeight: 'bold', color: 'black'}}>
                비밀번호
              </Text>
            </View>
            <View style={[styles.TextView, styles.TextViews]}>
              <TextInput
                secureTextEntry={true}
                value={passwordInput}
                style={styles.joinInput}
                onChangeText={(Text: string) => {
                  setPasswordInput(Text);
                  const emailRegEx =
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
                  const passwordCheck = emailRegEx.test(Text);
                  if (passwordCheck) {
                    setPassRegEx(true);
                  } else {
                    setPassRegEx(false);
                  }
                }}
              />
              {passRegEx ? (
                <Text> 비밀번호 형식에 맞습니다</Text>
              ) : (
                <Text style={{color: 'red', fontSize: 10}}>
                  {' '}
                  영문 대/소문자를 포함하고 8~12자로 입력해주세요
                </Text>
              )}
            </View>
            <View style={styles.TextView}>
              <Text style={{fontSize: 17, fontWeight: 'bold', color: 'black'}}>
                비밀번호 확인
              </Text>
            </View>
            <View style={[styles.TextView, styles.TextViews]}>
              <TextInput
                secureTextEntry={true}
                style={styles.joinInput}
                value={repassword}
                onChangeText={(Text: string) => {
                  setRepassword(Text);
                  if (Text == '') {
                    return;
                  }
                  if (Text === passwordInput) {
                    setRepassCheck(true);
                  } else {
                    setRepassCheck(false);
                  }
                }}
              />
              {repassCheck ? (
                <Text> 비밀번호 형식에 맞습니다</Text>
              ) : (
                <Text style={{color: 'red', fontSize: 10}}>
                  {' '}
                  비밀번호가 일치하지 않습니다.
                </Text>
              )}
            </View>
            <View style={styles.TextView}>
              <Text style={{fontSize: 17, fontWeight: 'bold', color: 'black'}}>
                이름
              </Text>
            </View>
            <View style={[styles.TextView, styles.TextViews]}>
              <TextInput
                style={styles.joinInput}
                onChangeText={(text: string) => {
                  setName(text);
                }}
              />
            </View>
            <View style={styles.TextView}>
              <Text style={{fontSize: 17, fontWeight: 'bold', color: 'black'}}>
                휴대폰 번호
              </Text>
            </View>
            <View style={[styles.TextView, styles.TextViews]}>
              <TextInput
                style={styles.joinInput}
                value={phone}
                onChangeText={(text: string) => {
                  setPhone(text);
                }}
              />
            </View>
          </View>
          <Pressable
            style={[styles.ButtonStyle, styles.JoinButton]}
            onPress={async () => {
              try {
                if (next) {
                  const response = await axios.post(
                    'http://team3holdmyhand-springboot.ap-northeast-2.elasticbeanstalk.com/api/members/signup',
                    {
                      email: email,
                      nickname: name,
                      password: passwordInput,
                      phoneNum: phone,
                    },
                  );
                  navigation.navigate('Complete');
                } else {
                  Alert.alert('이메일', '이메일 중복확인을 해주세요');
                }
              } catch (error) {
                Alert.alert('회원가입 실패', '회원가입에 실패했습니다.');
              }
            }}>
            <Text style={{color: 'white'}}>회원 가입 하기</Text>
          </Pressable>
        </KeyboardAvoidingView>
      </View>
    {/* <View
      style={{
        flex: 1,
        // marginBottom: 50,
        // alignItems: 'center',
      }}>
      <ScrollView style={{flex: 1}}>
        <KeyboardAvoidingView
          style={{flex: 1, marginBottom: 50, alignItems: 'center'}}>
          <View
            style={{
              alignItems: 'center',
              width: appWidth * 0.75,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 20,
              marginBottom: 15,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '900',
                color: 'black',
              }}>
              회원가입
            </Text>
            <Image source={require('../assets/pngs/Stage.png')} />
          </View>
          <View style={{height: height * 0.3}}>
            <View style={styles.TextView}>
              <Text style={{fontSize: 15, fontWeight: 'bold', color: 'black'}}>
                이메일
              </Text>
            </View>
            <View style={styles.TextView}>
              <View>
                <TextInput
                  value={email}
                  onChangeText={(text: string) => {
                    setEmail(text);
                  }}
                  style={{
                    width: 220,
                    height: 35,
                    borderRadius: 8,
                    borderWidth: 1,
                    borderColor: 'gray',
                  }}
                />
              </View>
              <View style={{flexDirection: 'column', justifyContent: 'center'}}>
                <Pressable
                  style={styles.ButtonStyle}
                  onPress={async () => {
                    const response = await axios.post(
                      'http://team3holdmyhand-springboot.ap-northeast-2.elasticbeanstalk.com/api/members/email',
                      {
                        email: email,
                      },
                    );
                    if (response.data.data) {
                      Alert.alert('아이디 중복', '아이디가 중복 되었습니다.');
                    } else {
                      setNext(true);
                      Alert.alert('아이디 중복', '이메일이 사용가능 합니다.');
                    }
                  }}>
                  <Text style={{color: 'white'}}>중복 확인</Text>
                </Pressable>
              </View>
            </View>
          </View>
          <View style={{}}>
            <View style={styles.TextView}>
              <Text style={{fontSize: 17, fontWeight: 'bold', color: 'black'}}>
                비밀번호
              </Text>
            </View>
            <View style={[styles.TextView, styles.TextViews]}>
              <TextInput
                secureTextEntry={true}
                value={passwordInput}
                style={styles.joinInput}
                onChangeText={(Text: string) => {
                  setPasswordInput(Text);
                  const emailRegEx =
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
                  const passwordCheck = emailRegEx.test(Text);
                  if (passwordCheck) {
                    setPassRegEx(true);
                  } else {
                    setPassRegEx(false);
                  }
                }}
              />
              {passRegEx ? (
                <Text> 비밀번호 형식에 맞습니다</Text>
              ) : (
                <Text style={{color: 'red', fontSize: 10}}>
                  {' '}
                  영문 대/소문자를 포함하고 8~12자로 입력해주세요
                </Text>
              )}
            </View>
            <View style={styles.TextView}>
              <Text style={{fontSize: 17, fontWeight: 'bold', color: 'black'}}>
                비밀번호 확인
              </Text>
            </View>
            <View style={[styles.TextView, styles.TextViews]}>
              <TextInput
                secureTextEntry={true}
                style={styles.joinInput}
                value={repassword}
                onChangeText={(Text: string) => {
                  setRepassword(Text);
                  if (Text == '') {
                    return;
                  }
                  if (Text === passwordInput) {
                    setRepassCheck(true);
                  } else {
                    setRepassCheck(false);
                  }
                }}
              />
              {repassCheck ? (
                <Text> 비밀번호 형식에 맞습니다</Text>
              ) : (
                <Text style={{color: 'red', fontSize: 10}}>
                  {' '}
                  비밀번호가 일치하지 않습니다.
                </Text>
              )}
            </View>
            <View style={styles.TextView}>
              <Text style={{fontSize: 17, fontWeight: 'bold', color: 'black'}}>
                이름
              </Text>
            </View>
            <View style={[styles.TextView, styles.TextViews]}>
              <TextInput
                style={styles.joinInput}
                onChangeText={(text: string) => {
                  setName(text);
                }}
              />
            </View>
            <View style={styles.TextView}>
              <Text style={{fontSize: 17, fontWeight: 'bold', color: 'black'}}>
                휴대폰 번호
              </Text>
            </View>
            <View style={[styles.TextView, styles.TextViews]}>
              <TextInput
                style={styles.joinInput}
                value={phone}
                onChangeText={(text: string) => {
                  setPhone(text);
                }}
              />
            </View>
          </View>
          <Pressable
            style={[styles.ButtonStyle, styles.JoinButton]}
            onPress={async () => {
              try {
                if (next) {
                  const response = await axios.post(
                    'http://team3holdmyhand-springboot.ap-northeast-2.elasticbeanstalk.com/api/members/signup',
                    {
                      email: email,
                      nickname: name,
                      password: passwordInput,
                      phoneNum: phone,
                    },
                  );
                  navigation.navigate('Complete');
                } else {
                  Alert.alert('이메일', '이메일 중복확인을 해주세요');
                }
              } catch (error) {
                Alert.alert('회원가입 실패', '회원가입에 실패했습니다.');
              }
            }}>
            <Text style={{color: 'white'}}>회원 가입 하기</Text>
          </Pressable>
        </KeyboardAvoidingView>
      </ScrollView>
    </View> */}
    </SafeAreaView>
    </>
  );
}
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

  ButtonStyle: {
    alignItems: 'center',
    backgroundColor: '#FF4D4D',
    borderRadius: 5,
    height: 35,
    justifyContent: 'center',
    marginBottom: 20,
    marginLeft: 10,
    width: 70,
  },
  IamgeView: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    width: appWidth * 0.85,
  },
  JoinButton: {
    height: 45,
    marginTop: 70,
    width: appWidth * 0.9,
  },
  TextInputEmailStyle: {
    borderColor: 'gray',
    borderRadius: 8,
    borderWidth: 2,
    height: 40,
    width: 200,
  },
  TextView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    width: appWidth * 0.85,
  },
  TextViews: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 10,
    width: appWidth * 0.8,
  },
  joinInput: {
    borderColor: 'gray',
    borderRadius: 8,
    borderWidth: 1,
    height: 35,
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
