import * as React from 'react';
import {useCallback, useState} from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function JoinForm() {
  const [parents, setParents] = useState(false);
  const [parent2, setParents2] = useState(false);

  const appWidth = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  return (
    <View style={{flex: 1, backgroundColor: '#F4F5F9'}}>
      <View
        style={{
          flex: 1,
          marginTop: 25,
          marginLeft: 15,
        }}>
        {/**/}
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <Image source={require('../assets/pngs/Reconcile_rava.png')} />
            <View style={{flexDirection: 'row'}}>
              <Image source={require('../assets/pngs/Reconcile_bell.png')} />
              <Image
                source={require('../assets/pngs/Reconcile_circle.png')}
                style={{marginLeft: 15, width: 18, marginRight: 10}}
              />
            </View>
          </View>
        </View>
        {/**/}
        <View style={{marginTop: 15, height: height * 0.1}}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '900',
              width: appWidth * 0.8,
              color: 'black',
            }}>
            화해하자
          </Text>
          <Text style={{fontSize: 10, color: 'black'}}>
            화해하고 싶은 대상과 유형을 선택하면 필요한 화해 멘트를 추천해줘요.
          </Text>
        </View>
        {/**/}
        <View style={{marginTop: 15}}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '900',
              color: 'black',
            }}>
            화해 대상
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 15,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Pressable
                style={parents ? styles.buttons : styles.button}
                onPress={() => {
                  setParents(!parents);
                  setParents2(false);
                }}>
                <Text style={parents ? styles.ontext : styles.text}>부모</Text>
              </Pressable>
              <Pressable style={styles.buttons}>
                <Text style={styles.ontext}>연인</Text>
              </Pressable>
              <Pressable style={styles.buttons}>
                <Text style={styles.ontext}>친구</Text>
              </Pressable>
              <Pressable style={styles.buttons}>
                <Text style={styles.ontext}>동료</Text>
              </Pressable>
            </View>
            <View />
          </View>
        </View>
        {/**/}
        {parents ? (
          <></>
        ) : (
          <View>
            <Text style={{fontSize: 15, fontWeight: '900', color: 'black'}}>
              화해 유형
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginTop: 15,
              }}>
              <View>
                <Pressable
                  style={parent2 ? styles.buttonTwo2 : styles.buttonTwo}
                  onPress={() => {
                    setParents2(!parent2);
                  }}>
                  <Text style={parent2 ? styles.text : styles.ontext}>
                    일방적으로 짜증냈을때
                  </Text>
                </Pressable>
                <View style={styles.buttonTwo}>
                  <Text style={styles.ontext}>사소한 오해가 있었을때</Text>
                </View>
              </View>
              <View>
                <View style={styles.buttonTwo}>
                  <Text style={styles.ontext}>약속을 안 지켰을 때</Text>
                </View>
                <View style={styles.buttonTwo}>
                  <Text style={styles.ontext}>예의 없는 말을 했을 때</Text>
                </View>
              </View>
            </View>
          </View>
        )}
        {/**/}
        {parent2 ? (
          <View>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '900',
                color: 'black',
                marginBottom: 10,
              }}>
              화해 멘트
            </Text>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.tsex}>
                <Text style={{color: '#FF9090'}}>부모님</Text>
              </View>
              <Text style={styles.ontext}>죄송해요</Text>
              <View style={styles.tsex}>
                <Text style={{color: '#FF9090'}}>언제</Text>
              </View>
              <Text style={styles.ontext}>에 제가 짜증낸</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.ontext2}>
                거에 대해 사과 드릴게요. 너무 감정적으로 행동했던 것 같아요.
              </Text>
            </View>
            <View
              style={{
                backgroundColor: 'white',
                borderColor: 'gray',
                width: appWidth * 0.93,
                alignItems: 'center',
                marginRight: 10,
                marginTop: 10,
                height: 30,
                justifyContent: 'center',
              }}>
              <Text style={{color: '#FF9090'}}>짜증을 낸 원인</Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <Text style={styles.ontext}>
                때문에 기분이 조금 안 좋았는데 그걸
              </Text>
              <View style={styles.tsex}>
                <Text style={{color: '#FF9090'}}>부모님</Text>
              </View>
              <Text style={styles.ontext}>께 화풀이</Text>
            </View>
            <Text style={styles.ontext2}>
              하듯 말했어요. 앞으오는 그렇게 행동하지 않도록 할게요.
            </Text>
          </View>
        ) : (
          <></>
        )}
        {/**/}
        {parent2 ? (
          <View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <View
                style={{
                  marginTop: 50,
                  borderRadius: 5,
                  width: appWidth * 0.8,
                  height: 39,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: 20,
                  backgroundColor: '#FF4D4D',
                  borderWidth: 1,
                  borderColor: 'gray',
                }}>
                <Text style={{color: 'white'}}>복사하기</Text>
              </View>
            </View>
          </View>
        ) : (
          <></>
        )}
        {/**/}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  Onbutton: {
    alignItems: 'center',
    backgroundColor: '#FF9090',
    borderColor: 'gray',
    borderRadius: 5,
    elevation: 8,
    height: 25,
    justifyContent: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    width: 80,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#FF9090',
    borderColor: 'gray',
    borderRadius: 5,
    color: 'white',
    elevation: 8,
    height: 25,
    justifyContent: 'center',
    marginBottom: 20,
    marginLeft: 10,
    shadowColor: '#000',
    width: 55,
  },
  buttonTwo: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: 'gray',
    borderRadius: 5,
    elevation: 8,
    height: 25,
    justifyContent: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    width: 180,
  },
  buttonTwo2: {
    alignItems: 'center',
    backgroundColor: '#FF9090',
    borderColor: 'gray',
    borderRadius: 5,
    elevation: 8,
    height: 25,
    justifyContent: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    width: 180,
  },
  buttons: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: 'gray',
    borderRadius: 5,
    elevation: 8,
    height: 25,
    justifyContent: 'center',
    marginBottom: 20,
    marginLeft: 10,
    shadowColor: '#000',
    width: 55,
  },
  ontext: {
    color: 'black',
  },
  ontext2: {
    color: 'black',
    marginTop: 10,
  },
  text: {
    color: 'white',
  },
  tsex: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: 'gray',
    marginRight: 10,
    width: 80,
  },
});
