import * as React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Four from './Four';
import SS from './SS';
import SS2 from './SS2';
const Stack = createNativeStackNavigator();

function Third() {
  return (
    <Stack.Navigator initialRouteName="SS2">
      <Stack.Screen name="SS" component={SS} options={{title: 'SS'}} />
      <Stack.Screen name="SS2" component={SS2} options={{title: 'SS2'}} />
    </Stack.Navigator>
  );
}

export default Third;
