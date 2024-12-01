import {PaperProvider} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {AbsolutPositionScreen} from './src/presentation/screens/AbsolutPositionScreen';

export const App = () => {
  return (
    <PaperProvider settings={{icon: props => <IonIcon {...props} />}}>
      <SafeAreaView style={{flex: 1}}>
        {/* <BoxObjectModelScreen /> */}
        {/* <DimenssionScreen /> */}
        {/* <RelativePositionScreen /> */}
        <AbsolutPositionScreen />
      </SafeAreaView>
    </PaperProvider>
  );
};
