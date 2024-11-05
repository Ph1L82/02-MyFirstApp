import { SafeAreaView } from "react-native"
import { CounterScreen } from "./src/presentation/screens/CounterScreen"

export const App = () => {
  return (
    <SafeAreaView>
      {/* <HelloWorldScreen name="Eduardo Rodríguez Bahamonde" /> */}
      <CounterScreen />
    </SafeAreaView>
  )
}
