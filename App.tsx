import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {View, Text} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import InitialScreen from './src/screen/InitialScreen';
import {NavigationContainer} from '@react-navigation/native';

export type RootStackParamList = {
  InitialScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator
          initialRouteName="InitialScreen"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="InitialScreen" component={InitialScreen} />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

export default App;
