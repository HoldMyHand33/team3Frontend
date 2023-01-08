import React, { useState } from "react";
import { Alert, Pressable, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const Daily = ({ setTF3 }: any) => {

  return (
      <>
        <Text style={stylesContent2.text2}>아크</Text>
        <View style={stylesContent1.box2}>
          <Text style={{ textAlign: 'center', lineHeight: 130, }}>
            아직 친구가 오늘의 교환 일기를 작성하지 않았어요.
          </Text>
        </View>
        <Text style={stylesContent2.text2}>브라운</Text>
        <TouchableOpacity
            style={stylesContent1.box2} 
            onPress={()=>{ setTF3(false) }}>
          <Text style={{ textAlign: 'center', lineHeight: 130, }}>
            눌러서 오늘의 교환 일기를 작성해주세요.
          </Text>
        </TouchableOpacity>
      </>
  );
};

const stylesContent1 = StyleSheet.create({
  box2: {
    width: '100%',
    height: 130,
    marginBottom: 40,

    borderRadius: 10,
    backgroundColor: '#fff',
  },
})
const stylesContent2 = StyleSheet.create({
  text2: {
    marginBottom: 15,
    fontSize: 13,
},
})

export default Daily;
