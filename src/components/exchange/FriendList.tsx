import React, { useState, useEffect } from "react";
import { Alert, Pressable, StyleSheet, Text, View, Image } from 'react-native';

const FriendList = () => {
    const [date, setDate] = useState(0);
    const [dateContent, setDateContent] = useState([
        '사이가 멀어진 당시에 어떤 상황이었나요?', 
        '사이가 멀어졌을 때 자신의 감정은 어땠나요?',
        '상대방과 멀어진 이유가 뭐라고 생각하시나요?',
        '멀어진 이후에 어떤 생각을 했고, 무슨 감정이 들었나요?',
        '화해해야겠다고 다짐한 이유가 무엇인가요?',
        '상대방과 화해한 지금 어떤 생각이 드시나요?',
        '앞으로의 다짐 및 서로와의 약속을 적어주세요.',
    ]);

  return (
      <>
        <View style={stylesContent1.title}>
            <Text style={stylesContent1.text}>교환 일기</Text>
            <Text style={stylesContent1.delete}>그만쓰기</Text>
        </View>
        <View style={stylesContent1.box}>
            <Text style={stylesContent1.text2}>아크와 나누는 첫 번째 교환 일기 질문이 도착했어요.</Text>
            <Text style={stylesContent1.text2}>오늘 24시 전까지 답장해주세요.</Text>
        </View>
        <Text style={stylesContent1.text3}>아크와 교환 일기 {date+1}일차</Text>
        {dateContent.map((data, idx)=>{
            return (
                (date<idx?
                    <></>:
                    <Text style={stylesContent1.text4}>
                        {idx+1}일차&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Text style={stylesContent1.text5}>{data}</Text>
                    </Text>
                )
            );
        })}
      </>
  );
};

const stylesContent1 = StyleSheet.create({
    title: {
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    delete: {
        color: '#364356',
        fontSize: 11,
    },

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
    color: '#fff',
    fontSize: 12,
  },
  text3: {
    marginBottom: 30,
    color: '#000',
    textAlign: 'center',
    fontSize: 14,
  },
  text4: {
    color: '#FF9090',
  },
  text5: {
    color: '#000',
    fontSize: 12,
  },

  box: {
    width: '100%',
    height: 60,
    marginBottom: 40,
    paddingTop: 14,

    alignItems: 'center',

    borderRadius: 7,
    backgroundColor: '#FF9090',
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

export default FriendList;
