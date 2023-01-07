import React, {Dispatch, SetStateAction} from 'react';
import {
  GestureResponderEvent,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from 'react-native';

import Colors from '../../../constants/Colors';

interface Props {
  text: string;
  onPress?: Dispatch<SetStateAction<boolean>>;
  onSubmit?: () => void;
  textStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}

const SquareButton = ({
  text,
  textStyle,
  containerStyle,
  onPress,
  onSubmit,
}: Props) => {
  return (
    <Pressable
      onPress={() => (onPress && onPress(true)) || (onSubmit && onSubmit())}
      style={({pressed}) => [
        styles.container,
        containerStyle,
        pressed && styles.pressed,
      ]}>
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: Colors.PRIMARY,
    borderRadius: 8,
    height: 45,
    justifyContent: 'center',
  },
  pressed: {
    opacity: 0.7,
  },
  text: {
    color: Colors.WHITE,
    fontSize: 15,
    fontWeight: '700',
  },
});

export default SquareButton;
