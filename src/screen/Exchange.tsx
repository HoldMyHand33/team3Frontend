import React, { useState } from "react";
import { Alert, Pressable, StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FriendList from "../components/exchange/FriendList";

const Exchange = () => {
    const [myCode, setMyCode] = useState("k3du10");

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.title}>
            내 손을&nbsp;
            <Text style={{ fontSize: 22, fontWeight: '900', }}>자바</Text>
        </Text>
        <View style={styles.headerright}>
            <Text>알람</Text>
            <Text>마이</Text>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={stylesContent1.text}>교환하자</Text>
        <Text style={stylesContent1.text2}>화해한 친구와 7일간의 교환 일기로 서로를 이해하고 어색함을 풀어요.</Text>
        <FriendList />
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

    flexDirection: 'row',
    justifyContent: "space-between",
  },
  headerright: {
    flexDirection: 'row',
    justifyContent: "space-between",
  },
  title: {
    fontSize: 18,
    fontWeight: '400',
  },

  content: {
    flex: 1,
    padding: 15,
    paddingTop: 0,
  },

})

const stylesContent1 = StyleSheet.create({
  content: {
    position: 'relative',
  },
  text: {
    color: '#000',
    marginBottom: 15,
    fontSize: 13,
    fontWeight: '400',
  },
  text2: {
    marginBottom: 52,
    color: '#000',
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

export default Exchange;
