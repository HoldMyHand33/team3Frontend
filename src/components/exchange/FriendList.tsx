import React, { useState } from "react";
import { Alert, Pressable, StyleSheet, Text, View, Image } from 'react-native';
import Modal2 from "./Modal2";

const FriendList = ({ setTF, setIsModalOpen2 }: any) => {
    const [myCode, setMyCode] = useState("k3du10");
    const [user, setUser] = useState(false);

  return (
      <>
        <Text style={stylesContent1.text}>친구 목록</Text>
        <View style={stylesContent1.box}>
            {user&&            
              <View style={stylesContent1.box2}>
                  <Image source={require('../../assets/pngs/home_heart.png')} />
                  <Text style={stylesContent2.text}>현</Text>
                  <Text style={stylesContent2.button}>신청하기</Text>
              </View>
            }
            <View style={stylesContent1.box2}>
                <Image source={require('../../assets/pngs/home_heart.png')} />
                <Text style={stylesContent2.text}>지미</Text>
                <Text style={stylesContent2.button}>신청하기</Text>
            </View>
            <View style={stylesContent1.box2}>
                <Image source={require('../../assets/pngs/home_heart.png')} />
                <Text style={stylesContent2.text}>아크</Text>
                <Text 
                  style={[stylesContent2.button, stylesContent2.button2]}
                  onPress={()=>{
                    // setIsModalOpen2(true); 
                    setTF(false);  
                  }}>
                    수락하기
                </Text>
            </View>
        </View>
        <View style={stylesContent1.bottom}>
            <Text style={stylesContent1.text}>
                나의 코드 {myCode}&nbsp;&nbsp;&nbsp;&nbsp;
                <Text style={stylesContent1.copy}>복사하기</Text>
            </Text>
            <Text style={stylesContent1.button}                
              onPress={()=>{
              setIsModalOpen2(true); 
              // setTF(false);  
              setUser(true);
            }}>친구 추가하기</Text>
        </View>
      </>
  );
};

const stylesContent1 = StyleSheet.create({
  content: {
    position: 'relative',
  },
  text: {
    marginBottom: 15,
    fontSize: 13,
    fontWeight: '400',
  },
  text2: {
    marginBottom: 52,
    fontSize: 11,
    fontWeight: '400',
  },

  img: {
    width: '100%',
    marginBottom: 25,
  },

  box: {
    width: '100%',
    height: 200,
    marginBottom: 37,
    padding: 18,
    paddingLeft: 25,
    paddingRight: 25,

    color: '#fff',
    shadowColor: '#000',
    elevation: 8,

    borderRadius: 7,
    backgroundColor: '#fff',
  },
  box2: {
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: "space-between",
  },

  bottom: {
    flexDirection: 'row',
    justifyContent: "space-between",
  },
  copy: {
    color: '#FF4D4D',
  },

  button: {
    width: 90,
    height: 25,
    lineHeight: 23,

    fontSize: 12,
    color: '#fff',
    textAlign: "center",

    borderRadius: 5,
    backgroundColor: '#FF4D4D',
  },
})

const stylesContent2 = StyleSheet.create({
    text: {
      width: '60%',
      lineHeight: 30,
      fontSize: 12,
    },

    button2: {
      backgroundColor: '#FF4D4D',
    },
    button: {
        width: 65,
        height: 23,
        lineHeight: 22,
        marginTop: 2,

        color: '#fff',
        fontSize: 12,
        textAlign: 'center',

        borderRadius: 20,
        backgroundColor: '#FF9090',
    },
})

export default FriendList;