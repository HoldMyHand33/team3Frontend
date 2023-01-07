import {StyleSheet, Text, View} from 'react-native';
import Colors from '../../constants/Colors';

interface Props {
  text: string;
}

const Divider = ({text}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.divider} />
      <Text style={styles.text}>{text}</Text>
      <View style={styles.divider} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  divider: {
    height: 1,
    flex: 1,
    backgroundColor: Colors.DIVIDER,
  },
  text: {fontSize: 13, marginHorizontal: 12, color: Colors.DIVIDER},
});

export default Divider;
