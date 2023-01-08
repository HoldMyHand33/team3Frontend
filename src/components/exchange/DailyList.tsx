import React, { useState, useEffect } from "react";
import { Alert, Pressable, StyleSheet, Text, View, Image } from 'react-native';

const DailyList = ({ setTF, setTF2, date, dateContent }: any) => {

  return (
      <>
        <View style={stylesContent1.title}>
            <Text style={stylesContent1.text}>교환 일기</Text>
            <Text style={stylesContent1.delete} onPress={()=>{ setTF(true) }}>그만쓰기</Text>
        </View>
        <View style={stylesContent1.box}>
            <Text style={stylesContent1.text2}>아크와 나누는 첫 번째 교환 일기 질문이 도착했어요.</Text>
            <Text style={stylesContent1.text2}>오늘 24시 전까지 답장해주세요.</Text>
        </View>
        <Text style={stylesContent1.text3}>아크와 교환 일기 {date+1}일차</Text>
        {dateContent.map((data: any, idx: number)=>{
            return (
                (date<idx?
                    <></>:
                    <Text 
                      style={stylesContent1.text4}
                      onPress={()=>{ setTF2(false) }}>
                        {idx+1}일 차&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
    marginBottom: 10,
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

  last: {
    flex: 1,
    margin: 15,
    marginBottom: 30,

    flexDirection:'row',
    alignItems:'flex-end',
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

export default DailyList;
