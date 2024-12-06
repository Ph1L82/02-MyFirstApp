import {StyleSheet, View} from 'react-native';

export const FlexDirectionsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.box1]} />
      <View style={[styles.box, styles.box2]} />
      <View style={[styles.box, styles.box3]} />
      <View style={[styles.box, styles.box4]} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d1d1d1',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  box: {
    width: 100,
    height: 100,
    // flex: 1,
  },
  box1: {
    backgroundColor: '#5856D6',
  },
  box2: {
    backgroundColor: '#4240a2',
    alignSelf: 'flex-end',
  },
  box3: {
    backgroundColor: '#2e2d71',
    alignSelf: 'center',
  },
  box4: {
    backgroundColor: '#22223f',
    alignSelf: 'flex-end',
  },
});
