import React, { useState } from "react";
import { Alert, Pressable, StyleSheet, Text, View, Image } from 'react-native';
// import { CheckBoxBase } from "@react-native-community/checkbox";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {

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
        <View>
            <View style={stylesContent1.content}>
                <Text style={stylesContent1.text}>
                    화해할 결심
                </Text>
                <Image 
                    style={stylesContent1.img}
                    source={require('../assets/pngs/home_letter.png')} />
                
                <Text style={stylesContent1.text2}>아직 화해를 결심하지 않았어요.</Text>
                <Text style={stylesContent1.text3}>화해 결심하러 가기</Text>
            </View>

            <Text style={stylesContent1.text}>
                화해 Tip
            </Text>
            <Text style={stylesContent2.text}>내 잘못으로 친구가 화가 났을 때</Text>
            <View style={stylesContent2.box}>
                <View style={stylesContent2.boxinner}>
                    <View style={stylesContent2.boxleft}>
                        <Image source={require('../assets/pngs/home_heart.png')} />
                        <Text style={stylesContent2.text2}>현</Text>
                    </View>
                    <View style={stylesContent2.boxright}>
                        <Text style={stylesContent2.text2}>지각이 잦은 나, 오늘도 늦었다면?</Text>
                        <Text style={stylesContent2.text3}>콘텐츠 내용의 일부입니다. 사용자들의 관심을 유도하기 위해 내용의 일부를 노출합니다.</Text>
                    </View>
                </View>
                <View style={stylesContent2.boxinner}>
                    <View style={stylesContent2.boxleft}>
                        <Image source={require('../assets/pngs/home_heart.png')} />
                        <Text style={stylesContent2.text2}>제이</Text>
                    </View>
                    <View style={stylesContent2.boxright}>
                        <Text style={stylesContent2.text2}>친구한테 빌린 태블릿을 떨어뜨렸다...</Text>
                        <Text style={stylesContent2.text3}>콘텐츠 내용의 일부입니다. 사용자들의 관심을 유도하기 위해 내용의 일부를 노출합니다.</Text>
                    </View>
                </View>                
            </View>
            <Text style={stylesContent2.text}>내 잘못으로 친구가 화가 났을 때</Text>
            <View style={stylesContent2.box}>
                <View style={stylesContent2.boxinner}>
                    <View style={stylesContent2.boxleft}>
                        <Image source={require('../assets/pngs/home_heart.png')} />
                        <Text style={stylesContent2.text2}>현</Text>
                    </View>
                    <View style={stylesContent2.boxright}>
                        <Text style={stylesContent2.text2}>지각이 잦은 나, 오늘도 늦었다면?</Text>
                        <Text style={stylesContent2.text3}>콘텐츠 내용의 일부입니다. 사용자들의 관심을 유도하기 위해 내용의 일부를 노출합니다.</Text>
                    </View>
                </View>
                <View style={stylesContent2.boxinner}>
                    <View style={stylesContent2.boxleft}>
                        <Image source={require('../assets/pngs/home_heart.png')} />
                        <Text style={stylesContent2.text2}>제이</Text>
                    </View>
                    <View style={stylesContent2.boxright}>
                        <Text style={stylesContent2.text2}>친구한테 빌린 태블릿을 떨어뜨렸다...</Text>
                        <Text style={stylesContent2.text3}>콘텐츠 내용의 일부입니다. 사용자들의 관심을 유도하기 위해 내용의 일부를 노출합니다.</Text>
                    </View>
                </View>                
            </View>
        </View>
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
    position: 'relative',
  },
  text2: {
    position: 'absolute',
    alignSelf: 'center',
    marginTop: 70,
    fontSize: 11,
    fontWeight: '400',
  },
  text3: {
    position: 'absolute',
    alignSelf: 'center',
    marginTop: 170,

    color: '#FF4D4D',
    fontSize: 11,
    fontWeight: '400',
  },

  text: {
    marginBottom: 15,
    fontSize: 13,
    fontWeight: '900',
  },
  img: {
    width: '100%',
    marginBottom: 25,
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
})

const stylesContent2 = StyleSheet.create({
    text: {
      marginBottom: 10,
      fontSize: 12,
    },
    text2: {
        fontSize: 10,
    },
    text3: {
        fontSize: 9,
    },

    box: {
        height: 140,
        marginBottom: 20,

        overflow: 'hidden',

        borderRadius: 10,
        shadowColor: '#000',
        elevation: 8,

        backgroundColor: '#fff',
    },
    boxinner: {
        height: 70,
        flexDirection: 'row',
    },
    boxleft: {
        width: '17%',

        justifyContent: "center",
        alignItems: "center",
    },
    boxright: {
        width: '83%',
        padding: 5,

        justifyContent: "center",
        // alignItems: "center",
    },
})

export default Home;
