import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {LogoTextSecond} from '../../assets/svgs';

const MyScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <View>
        <LogoTextSecond />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    alignSelf: 'stretch',
    flex: 1,
  },
});

export default MyScreen;
