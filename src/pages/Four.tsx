import * as React from 'react';
import {View, Text} from 'react-native';
import {FourFive} from '../../App';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

// 스택 라우터
type Fourtype = NativeStackScreenProps<FourFive, 'Four'>;
function Four({navigation}: Fourtype) {
  return (
    <View>
      <Text>Four</Text>
    </View>
  );
}

export default Four;
