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
  onPress?: () => void;
  textStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}

const SquareButton = ({text, textStyle, containerStyle, onPress}: Props) => {
  return (
    <Pressable
      onPress={onPress}
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
    height: 45,
    alignSelf: 'stretch',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.PRIMARY,
  },
  text: {
    fontSize: 15,
    color: Colors.WHITE,
    fontWeight: '700',
  },
  pressed: {
    opacity: 0.7,
  },
});

export default SquareButton;
