import React from 'react'
import { View, Text } from 'react-native'
import styles from '../theme/appTheme'

export const CalculatorScreen = () => {
  return (
    <View style={styles.calculatorcontainer}>
      <Text style={styles.resultSmall}>1,000.90</Text>
      <Text style={styles.result}>1,000.90</Text>

      <View>
        {/* Button */}
        <View style={styles.button}>
          <Text style={styles.textButton}>1</Text>
        </View>
      </View>
    </View>

  )
}
