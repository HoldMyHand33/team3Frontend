import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import First from './src/pages/First';
import Second from './src/pages/Second';
import Third from './src/pages/Third';
import Four from './src/pages/Four';
import Five from './src/pages/Five';

export type LoggedInParamList = {
  First: undefined;
  Second: undefined;
  Third: {orderId: string};
};

export type FourFive = {
  Four: undefined;
  Five: undefined;
};

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<FourFive>();

// Four에서 처음 시작 함
// Four에서 처음 시작 함
// Four에서 처음 시작 함
function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Tab.Navigator>
          <Tab.Screen
            name="First"
            component={First}
            options={{title: '오더 목록'}}
          />
          <Tab.Screen
            name="Second"
            component={Second}
            options={{headerShown: false}}
          />
          <Tab.Screen
            name="Third"
            component={Third}
            options={{title: '내 정보'}}
          />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="Four"
            component={Four}
            options={{title: '로그인'}}
          />
          <Stack.Screen
            name="Five"
            component={Five}
            options={{title: '회원가입'}}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default App;
