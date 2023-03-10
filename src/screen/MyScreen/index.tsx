import {
  BottomTabBarProps,
  BottomTabScreenProps,
} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {RootTabParamList} from '../../../App';
import {
  ArrowLeft,
  Bell,
  HandShake,
  LogoTextSecond,
  Person,
  Setting,
} from '../../assets/svgs';
import SquareButton from '../../components/common/UI/SquareButton';
import Colors from '../../constants/Colors';
import {removeToken} from '../../util/asyncStorage';

import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

type Props = BottomTabScreenProps<RootTabParamList, '마이페이지'>;

const MyScreen = ({setIsLoggedIn}: any) => {
  const navigate = useNavigation();
  const logout = async () => {
    await removeToken();
    setIsLoggedIn(false);
  };
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.title}>
            내 손을&nbsp;
            <Text style={{ fontSize: 22, fontWeight: '900', }}>자바</Text>
        </Text>
        <View style={styles.headerright}>
          <EvilIcons name="bell" size={30} style={{ marginRight: 7, }}/>
          <FontAwesome name="user-circle" size={22} color={'#FF4D4D'}/>
        </View>
      </View>

      <Pressable style={styles.backButton} onPress={() => navigate.goBack()}>
        <ArrowLeft style={{marginRight: 17}} />
        <Text>마이페이지</Text>
      </Pressable>

      <View style={styles.card}>
        <HandShake />
        <View>
          <Text>브라운</Text>
          <Text>brown@neordinary.com</Text>
          <Text>010-1234-5678</Text>
        </View>
        <Setting style={{alignSelf: 'flex-start'}} />
      </View>
      <SquareButton
        text="로그아웃"
        containerStyle={{marginBottom: 50}}
        onPress={() => logout()}
      />
      <View style={styles.card2}>
        <Text>나의 친구 목록</Text>
      </View>
      <View style={styles.card2}>
        <Text>교환 일기 보관함</Text>
      </View>
      <View style={styles.card2}>
        <Text>FAQ</Text>
      </View>
      <View style={styles.card2}>
        <Text>공지사항</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    width:'100%',
    padding: 6,
    paddingTop: 9,
    paddingBottom: 20,

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

  backButton: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    flexDirection: 'row',
    marginBottom: 15,
  },
  card: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
    flexDirection: 'row',
    height: 80,
    justifyContent: 'space-around',
    marginBottom: 15,
    padding: 8,
  },
  card2: {
    alignSelf: 'stretch',
    backgroundColor: Colors.WHITE,
    height: 45,
    justifyContent: 'center',
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  // header: {
  //   alignItems: 'center',
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   marginBottom: 18,
  // },
  iconContainer: {alignItems: 'center', flexDirection: 'row'},
  screen: {
    alignSelf: 'stretch',
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
});

export default MyScreen;
