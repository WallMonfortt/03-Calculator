import React, { useState } from 'react'
import { View, Text } from 'react-native'
import styles from '../theme/appTheme'
import { ButtonCalc } from '../components/ButtonCalc'

export const CalculatorScreen = () => {

  const [prevNumber, setPrevNumber] = useState('0')
  const [number, setNumber] = useState('1000.90')

  const clear = () => {
    setNumber('0')
  }

  const buidNumber = (textNumber: string) => {
    // No aceptar doble punto
    if (number.includes('.') && textNumber === '.') return

    if (number.startsWith('0') || number.startsWith('-0')) {
      // Punto decimal
      if (textNumber === '.') {
        setNumber(number + textNumber)

        // Evaluar si es otro cero, y hay un punto
      } else if (textNumber === '0' && number.includes('.')) {
        setNumber(number + textNumber)

        // Evaluar si es diferente de cero y no tiene un punto
      } else if (textNumber !== '0' && !number.includes('.')) {
        setNumber(textNumber)
        
        // Evitar 0000.0
      } else if (textNumber === '0' && !number.includes('.')) {
        setNumber(number)
      } else {
        setNumber(number + textNumber)
      }
    } else {
      setNumber(number + textNumber)
    }
  }

  return (
    <View style={styles.calculatorcontainer}>
      <Text style={styles.resultSmall}>{prevNumber}</Text>
      <Text 
        style={styles.result}
        numberOfLines={ 1 }
        adjustsFontSizeToFit
      >{number}</Text>

      <View style={styles.row}>
        {/* Button */}
        <ButtonCalc text="C" action ={clear} color="#9B9B9B" />
        <ButtonCalc text="+/-" action ={clear} color="#9B9B9B" />
        <ButtonCalc text="del" action ={clear} color="#9B9B9B" />
        <ButtonCalc text="/" action ={clear} color="#FF9427" />
        {/* #2D2D2D  dark gray */}
      </View>
      <View style={styles.row}>
        {/* Button */}
        <ButtonCalc text="7" action={buidNumber}/>
        <ButtonCalc text="8" action={buidNumber}/>
        <ButtonCalc text="9" action={buidNumber}/>
        <ButtonCalc text="X" action ={clear} color="#FF9427" />
        {/* #2D2D2D  dark gray */}
      </View>
      <View style={styles.row}>
        {/* Button */}
        <ButtonCalc text="4" action={buidNumber} />
        <ButtonCalc text="5" action={buidNumber}/>
        <ButtonCalc text="6" action={buidNumber}/>
        <ButtonCalc text="-" action ={clear} color="#FF9427" />
        {/* #2D2D2D  dark gray */}
      </View>
      <View style={styles.row}>
        {/* Button */}
        <ButtonCalc text="1" action={buidNumber}/>
        <ButtonCalc text="2" action={buidNumber}/>
        <ButtonCalc text="3" action={buidNumber}/>
        <ButtonCalc text="+" action ={clear} color="#FF9427" />
        {/* #2D2D2D  dark gray */}
      </View>
      <View style={styles.row}>
        {/* Button */}
        <ButtonCalc text="0" action={buidNumber} widther />
        <ButtonCalc text="." action ={clear} />
        <ButtonCalc text="=" action ={clear} color="#FF9427" />
        {/* #2D2D2D  dark gray */}
      </View>
    </View>

  )
}
