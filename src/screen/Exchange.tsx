import React, { useState } from "react";
import { Alert, Pressable, StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Daily from "../components/exchange/Daily";
import Daily2 from "../components/exchange/Daily2";
import DailyList from "../components/exchange/DailyList";
import FriendList from "../components/exchange/FriendList";

const Exchange = () => {
    const [myCode, setMyCode] = useState("k3du10");
    const [tf, setTF] = useState(true);
    const [tf2, setTF2] = useState(true);
    const [tf3, setTF3] = useState(true);

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
      {tf2?
        <>
            {tf?
                <View style={styles.content}>
                    <Text style={stylesContent1.text}>교환하자</Text>
                    <Text style={stylesContent1.text2}>화해한 친구와 7일간의 교환 일기로 서로를 이해하고 어색함을 풀어요.</Text>
                    <FriendList setTF={setTF} />
                </View>:
                <View style={styles.content}>
                    <Text style={stylesContent1.text}>교환하자</Text>
                    <Text style={stylesContent1.text2}>화해한 친구와 7일간의 교환 일기로 서로를 이해하고 어색함을 풀어요.</Text>
                    <DailyList setTF={setTF} setTF2={setTF2} date={date} dateContent={dateContent} />
                </View>
            }
        </>:
        <View style={styles.content}>
            {tf3?
                <>
                    <Text style={stylesContent1.text}><Text onPress={() => { setTF2(true); setTF(false); }}>&lt;</Text>&nbsp;교환 일기</Text>
                    <Text style={stylesContent1.text2}>화해한 친구와 7일간의 교환 일기로 서로를 이해하고 어색함을 풀어요.</Text>
                    <Daily setTF3={setTF3} />
                </>:
                <>
                    <Text style={stylesContent1.text}><Text onPress={() => { setTF3(true) }}>&lt;</Text>&nbsp;교환 일기</Text>
                    <Text style={stylesContent1.text2}>화해한 친구와 7일간의 교환 일기로 서로를 이해하고 어색함을 풀어요.</Text>
                    <Daily2 />
                    <Pressable 
                        style={styles.footer}
                        onPress={()=>{ }}>
                        <View style={styles.button}>
                            <Text style={styles.text}>저장하기</Text>
                        </View>
                    </Pressable>
                </>
            }
        </View>
      }
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
    margin: 15,
    marginBottom: 30,

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
    marginBottom: 34,
    alignItems: 'center',
  },

  box2: {
    width: '100%',
    height: 330,

    borderRadius: 10,
    backgroundColor: '#fff',
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
      marginBottom: 13,

      color: '#FF4D4D',
      fontSize: 25,
    },
    text2: {
        marginBottom: 15,
        fontSize: 13,
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
