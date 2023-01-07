import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {Dispatch, SetStateAction, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Heart, Heart2} from './src/assets/svgs';
import Complete from './src/screen/Complete';
import Exchange from './src/screen/Exchange';
import Home from './src/screen/Home';
import InitialScreen from './src/screen/InitialScreen';
import MyScreen from './src/screen/MyScreen';
import JoinForm from './src/screen/Reconcile';
// import JoinForm from './src/screen/Reconcile';
import SignupScreen from './src/screen/SignupScreen';
import SignupScreen2 from './src/screen/SignupScreen2';
import {getToken} from './src/util/asyncStorage';

export type RootTabParamList = {
  홈: undefined;
  화해하자: undefined;
  교환하자: undefined;
  마이페이지: undefined;
};

export type RootStackParamList = {
  InitialScreen: {setLogin: Dispatch<SetStateAction<boolean>> | undefined};
  SignupScreen: undefined;
  SignupScreen2: undefined;
  Complete: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    (async () => {
      const token = await getToken();
      if (token) {
        setIsLoggedIn(true);
      }
    })();
  }, []);

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        {isLoggedIn ? (
          <Tab.Navigator
            screenOptions={{
              tabBarActiveTintColor: '#e91e63',
            }}>
            <Tab.Screen
              name="홈"
              component={Home}
              options={{
                headerShown: false,

                tabBarIcon: ({color}) => (
                  <FontAwesome name="home" size={20} style={{color}} />
                ),
                tabBarActiveTintColor: '#FF4D4D',
                unmountOnBlur: true,
              }}
            />
            <Tab.Screen
              name="화해하자"
              component={JoinForm}
              options={{
                headerShown: false,
                tabBarIcon: ({color}) => (
                  <MaterialCommunityIcons
                    name="email-newsletter"
                    size={20}
                    style={{color}}
                  />
                ),
                tabBarActiveTintColor: '#FF4D4D',
                unmountOnBlur: true,
              }}
            />
            <Tab.Screen
              name="교환하자"
              component={Exchange}
              options={{
                headerShown: false,
                tabBarIcon: ({color}) => (
                  <Entypo name="pencil" size={20} style={{color}} />
                ),
                tabBarActiveTintColor: '#FF4D4D',
                unmountOnBlur: true,
              }}
            />
            <Tab.Screen
              name="마이페이지"
              // component={() => MyScreen({setIsLoggedIn})}
              children={() => <MyScreen setIsLoggedIn={setIsLoggedIn} />}
              options={{
                headerShown: false,
                tabBarStyle: {display: 'none'},
                tabBarIcon: ({color}) => <Heart2 style={{color: 'grey'}} />,
              }}
            />
          </Tab.Navigator>
        ) : (
          <Stack.Navigator
            initialRouteName="InitialScreen"
            screenOptions={{headerShown: false}}>
            <Stack.Screen
              name="InitialScreen"
              children={() => <InitialScreen setIsLoggedIn={setIsLoggedIn} />}
            />

            <Stack.Screen name="SignupScreen" component={SignupScreen} />
            <Stack.Screen name="SignupScreen2" component={SignupScreen2} />
            <Stack.Screen name="Complete" component={Complete} />
          </Stack.Navigator>
        )}
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

function Two() {
  return (
    <View>
      <Text>Two</Text>
    </View>
  );
}
