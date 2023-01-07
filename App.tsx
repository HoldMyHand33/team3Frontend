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

import Home from './src/screen/Home';
import InitialScreen from './src/screen/InitialScreen';
import SignupScreen from './src/screen/SignupScreen';
import Home from './src/screen/Home';
import Exchange from './src/screen/Exchange';


export type RootTabParamList = {
  홈: undefined;
  화해하자: undefined;
  교환하자: undefined;
};

export type RootStackParamList = {
  InitialScreen: {setLogin: Dispatch<SetStateAction<boolean>>};
  SignupScreen: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
              component={Two}
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
          </Tab.Navigator>
        ) : (
          <Stack.Navigator
            initialRouteName="InitialScreen"
            screenOptions={{headerShown: false}}>
            <Stack.Screen
              name="InitialScreen"
              component={() => InitialScreen({setIsLoggedIn})}
            />

            <Stack.Screen name="SignupScreen" component={SignupScreen} />
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

