import React from 'react'
import { View, Text } from 'react-native'
import styles from '../theme/appTheme'
import { ButtonCalc } from '../components/ButtonCalc'
import { useCalculator } from '../hooks/useCalculator'

export const CalculatorScreen = () => {
  const {
    prevNumber,
    number,
    clear,
    positiveNegative,
    btnDelete,
    btnDivide,
    btnMultiply,
    btnRest,
    btnSum,
    buildNumber,
    calculate
  } = useCalculator()
  
  return (
    <View style={styles.calculatorcontainer}>
      {
        prevNumber !== '0' && (
          <Text style={styles.resultSmall}>{prevNumber}</Text>
        )
      }
      <Text 
        style={styles.result}
        numberOfLines={ 1 }
        adjustsFontSizeToFit
      >{number}</Text>

      <View style={styles.row}>
        {/* Button */}
        <ButtonCalc text="C" action ={clear} color="#9B9B9B" />
        <ButtonCalc text="+/-" action ={positiveNegative} color="#9B9B9B" />
        <ButtonCalc text="del" action ={btnDelete} color="#9B9B9B" />
        <ButtonCalc text="/" action ={btnDivide} color="#FF9427" />
        {/* #2D2D2D  dark gray */}
      </View>
      <View style={styles.row}>
        {/* Button */}
        <ButtonCalc text="7" action={buildNumber}/>
        <ButtonCalc text="8" action={buildNumber}/>
        <ButtonCalc text="9" action={buildNumber}/>
        <ButtonCalc text="X" action ={btnMultiply} color="#FF9427" />
        {/* #2D2D2D  dark gray */}
      </View>
      <View style={styles.row}>
        {/* Button */}
        <ButtonCalc text="4" action={buildNumber} />
        <ButtonCalc text="5" action={buildNumber}/>
        <ButtonCalc text="6" action={buildNumber}/>
        <ButtonCalc text="-" action ={btnRest} color="#FF9427" />
        {/* #2D2D2D  dark gray */}
      </View>
      <View style={styles.row}>
        {/* Button */}
        <ButtonCalc text="1" action={buildNumber}/>
        <ButtonCalc text="2" action={buildNumber}/>
        <ButtonCalc text="3" action={buildNumber}/>
        <ButtonCalc text="+" action ={btnSum} color="#FF9427" />
        {/* #2D2D2D  dark gray */}
      </View>
      <View style={styles.row}>
        {/* Button */}
        <ButtonCalc text="0" action={buildNumber} widther />
        <ButtonCalc text="." action ={buildNumber} />
        <ButtonCalc text="=" action ={calculate} color="#FF9427" />
        {/* #2D2D2D  dark gray */}
      </View>
    </View>

  )
}
