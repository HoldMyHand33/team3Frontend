import React, { useState } from "react";
import { Alert, Pressable, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const Daily = ({ setTF3 }: any) => {

  return (
      <>
        <Text style={stylesContent2.text2}>아크</Text>
        <View style={stylesContent1.box2}></View>
        <Text style={stylesContent2.text2}>브라운</Text>
        <TouchableOpacity
            style={stylesContent1.box2} 
            onPress={()=>{ setTF3(false) }}>
    
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
