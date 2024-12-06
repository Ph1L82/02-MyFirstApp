import {PaperProvider} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {FlexDirectionsScreen} from './src/presentation/screens';

export const App = () => {
  return (
    <PaperProvider settings={{icon: props => <IonIcon {...props} />}}>
      <SafeAreaView style={{flex: 1}}>
        {/* <BoxObjectModelScreen /> */}
        {/* <DimenssionScreen /> */}
        {/* <RelativePositionScreen /> */}
        {/* <AbsolutPositionScreen /> */}
        {/* <FlexScreen /> */}
        <FlexDirectionsScreen />
      </SafeAreaView>
    </PaperProvider>
  );
};
