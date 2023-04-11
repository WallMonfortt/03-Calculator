import { SafeAreaView, StatusBar } from "react-native";
import { CalculatorScreen } from "./src/screens/CalculatorScreen";
import styles from "./src/theme/appTheme";



const App = () => {
  return (
    <SafeAreaView style={styles.background}>
      <StatusBar backgroundColor="black" barStyle="light-content" /> 
       {/* This is the status bar at the top of the screen */}
      <CalculatorScreen />
    </SafeAreaView>
  )
}

export default App;

