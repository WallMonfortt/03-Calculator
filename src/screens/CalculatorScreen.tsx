import React from 'react'
import { View, Text } from 'react-native'
import styles from '../theme/appTheme'
import { ButtonCalc } from '../components/ButtonCalc'

export const CalculatorScreen = () => {
  return (
    <View style={styles.calculatorcontainer}>
      <Text style={styles.resultSmall}>1,000.90</Text>
      <Text style={styles.result}>1,000.90</Text>

      <View style={styles.row}>
        {/* Button */}
        <ButtonCalc text="C" color="#9B9B9B" />
        <ButtonCalc text="+/-" color="#9B9B9B" />
        <ButtonCalc text="del" color="#9B9B9B" />
        <ButtonCalc text="/" color="#FF9427" />
        {/* #2D2D2D  dark gray */}
      </View>
      <View style={styles.row}>
        {/* Button */}
        <ButtonCalc text="7" />
        <ButtonCalc text="8" />
        <ButtonCalc text="9" />
        <ButtonCalc text="X" color="#FF9427" />
        {/* #2D2D2D  dark gray */}
      </View>
      <View style={styles.row}>
        {/* Button */}
        <ButtonCalc text="4" />
        <ButtonCalc text="5" />
        <ButtonCalc text="6" />
        <ButtonCalc text="-" color="#FF9427" />
        {/* #2D2D2D  dark gray */}
      </View>
      <View style={styles.row}>
        {/* Button */}
        <ButtonCalc text="1" />
        <ButtonCalc text="2" />
        <ButtonCalc text="3" />
        <ButtonCalc text="+" color="#FF9427" />
        {/* #2D2D2D  dark gray */}
      </View>
      <View style={styles.row}>
        {/* Button */}
        <ButtonCalc text="0" widther />
        <ButtonCalc text="." />
        <ButtonCalc text="=" color="#FF9427" />
        {/* #2D2D2D  dark gray */}
      </View>
    </View>

  )
}
