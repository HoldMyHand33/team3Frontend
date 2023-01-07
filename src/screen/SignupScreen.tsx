import React, { useState } from "react";
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';
// import { CheckBoxBase } from "@react-native-community/checkbox";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { SafeAreaView } from 'react-native-safe-area-context';

const SignupScreen = () => {
  const [isSelected, setSelection] = useState(false);

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.title}>
          내 손을&nbsp;
          <Text style={{ fontSize: 22, fontWeight: '900', }}>자바</Text>
        </Text>
      </View>
      <View style={styles.content}>
        <View>
          <View style={stylesContent1.content}>
            <Text style={stylesContent1.text}>
              회원가입
            </Text>
            <Text style={stylesContent1.box}>1/2</Text>
          </View>
          <Text style={{ fontSize: 16, fontWeight: '900', marginBottom: 10, }}>
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

              }}
            />
            {/* <View style={styleHr.hr} /> */}
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

                }}
              />
              <BouncyCheckbox
                style={stylesContent2.checkbox}
                size={22}
                fillColor="#364356"

                text="개인정보 처리방침 (필수)"
                iconStyle={{
                  borderRadius: 5,
                }}
                onPress={(isChecked: boolean) => {

                }}
              />
              <BouncyCheckbox
                style={stylesContent2.checkbox}
                size={22}
                fillColor="#364356"

                text="마케팅 정보 수신 동의 (선택)"
                iconStyle={{
                  borderRadius: 5,
                }}
                onPress={(isChecked: boolean) => {

                }}
              />
            </View>
          </View>
        </View>
        <Pressable 
          style={styles.footer}
          onPress={()=>{ }}>
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
    flex:1,
    alignSelf:'stretch',
    backgroundColor: '#F4F5F9',
  },
  
  header: {
    width:'100%',
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

    // backgroundColor: '#d6ca1a',
  },

  footer: {
    flex: 1,

    flexDirection:'row',
    alignItems:'flex-end',

  },
  button: {
    width:'100%',
    height: 45,

    justifyContent: "center",
    alignItems: "center",

    borderRadius: 7,
    backgroundColor: '#FF4D4D',
  },
  text: {
    color: 'white',
    fontSize: 16,
  }
})

const stylesContent1 = StyleSheet.create({
  content: {
    marginBottom: 40,

    flexDirection: 'row',
    justifyContent: "space-between",
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
  }
})

const stylesContent2 = StyleSheet.create({
  checkbox: {
    marginBottom: 10,
    borderRadius: 0,
  },
})

const stylesContent3 = StyleSheet.create({
  content: {
    marginLeft: 22,
  }
})

const styleHr = StyleSheet.create({
  hr: {
    width: '100%', 
    height: 1, 
    marginTop: 10, 
    marginBottom: 10, 
    backgroundColor: '#364356', 
  }
})

export default SignupScreen;
