import * as React from 'react';
import {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import {Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import InitialScreen from './src/screen/InitialScreen';
import SignupScreen from './src/screen/SignupScreen';
import Home from './src/screen/Home';

export type BottomNav = {
  홈: undefined;
  화해하자: undefined;
  교환하자: undefined;
};

export type RootStackParamList = {
  InitialScreen: undefined;
  SignupScreen: undefined;
};

const Tab = createBottomTabNavigator<BottomNav>();
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
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
              component={Three}
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
            initialRouteName="SignupScreen"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="InitialScreen" component={InitialScreen} />
            <Stack.Screen name="SignupScreen" component={SignupScreen} />
          </Stack.Navigator>
        )}
      </SafeAreaProvider>
    </NavigationContainer>
  );
}


function One() {
  return (
    <View>
      <Text>One</Text>
    </View>
  );
}

function Two() {
  return (
    <View>
      <Text>Two</Text>
    </View>
  );
}

function Three() {
  return (
    <View>
      <Text>Three</Text>
    </View>
  );
}
