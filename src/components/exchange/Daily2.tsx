import React, { useState } from "react";
import { Alert, Pressable, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const Daily2 = () => {

  return (
      <>
        <Text style={stylesContent2.text2}>브라운</Text>
        <TouchableOpacity style={stylesContent1.box2}></TouchableOpacity>
      </>
  );
};

const stylesContent1 = StyleSheet.create({
  box2: {
    width: '100%',
    height: 330,

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

export default Daily2;
