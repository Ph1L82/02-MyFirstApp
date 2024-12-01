import {StyleSheet, View} from 'react-native';

export const AbsolutPositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.grayBox}></View>
      <View style={styles.purpleBox}></View>
      <View style={styles.orangeBox}></View>
      <View style={styles.greenBox}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28C4D9',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  purpleBox: {
    width: 100,
    height: 100,
    backgroundColor: '#5856D6',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    bottom: 0,
  },
  orangeBox: {
    width: 100,
    height: 100,
    backgroundColor: '#F0A23B',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    right: 0,
  },
  greenBox: {
    width: 100,
    height: 100,
    backgroundColor: '#24c029',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  grayBox: {
    backgroundColor: '#4f504f',
    borderWidth: 10,
    borderColor: 'white',
    ...StyleSheet.absoluteFillObject,
  },
});
