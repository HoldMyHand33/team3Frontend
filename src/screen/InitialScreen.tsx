import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StyleSheet, Text} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {RootStackParamList} from '../../App';

export type LoginScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'InitialScreen'
>;

const InitialScreen = () => {
  return (
    <SafeAreaProvider style={styles.screen}>
      <Text>테스트</Text>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignSelf: 'stretch',
  },
});

export default InitialScreen;
