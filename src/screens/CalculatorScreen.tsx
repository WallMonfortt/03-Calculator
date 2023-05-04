import React, { useRef, useState } from 'react'
import { View, Text } from 'react-native'
import styles from '../theme/appTheme'
import { ButtonCalc } from '../components/ButtonCalc'

enum Operators {
  sum, rest, mult, div
}

export const CalculatorScreen = () => {

  const [prevNumber, setPrevNumber] = useState('0')
  const [number, setNumber] = useState('0')
  const lastOperation = useRef<Operators>()

  const clear = () => {
    setNumber('0')
    setPrevNumber('0')
  }

  const buidNumber = (textNumber: string) => {
    // No aceptar doble punto
    if (number.includes('.') && textNumber === '.') return

    if (number.startsWith('0') || number.startsWith('-0')) {
      // Punto decimal
      if (textNumber === '.') {
        setNumber(number + textNumber)
        // evaluar si es negativo
      } else if(number.startsWith('-0')){
        setNumber('-' + textNumber)
        
        // Evaluar si es otro cero, y hay un punto 
      }else if (textNumber === '0' && number.includes('.')) {
        setNumber(number + textNumber)

      }else if (textNumber !== '0' && !number.includes('.')) {
        // Evaluar si es diferente de cero y no tiene un punto
        setNumber(textNumber)

      } else if (textNumber === '0' && !number.includes('.')) {
        // Evitar 0000.0
        setNumber(number)
      }else {
        setNumber(number + textNumber)
      }
    }else{
      setNumber(number + textNumber)
    }
  }

  const positiveNegative = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''))
    } else {
      setNumber('-' + number)
    }
  }

  const btnDelete = () => {
    if (number.length === 1 || (number.length === 2 && number.includes('-'))) {
      setNumber('0')
    } else {
      setNumber(number.slice(0, -1))
    }
  }

  const changeNumberForPrevious = () => {
    if (number.endsWith('.')) {
      setPrevNumber(number.slice(0, -1))
    } else {
      setPrevNumber(number)
    }
    setNumber('0')
  }

  const btnDivide = () => {
    changeNumberForPrevious()
    lastOperation.current = Operators.div
  }

  const btnMultiply = () => {
    changeNumberForPrevious()
    lastOperation.current = Operators.mult
  }

  const btnRest = () => {
    changeNumberForPrevious()
    lastOperation.current = Operators.rest
  }

  const btnSum = () => {
    changeNumberForPrevious()
    lastOperation.current = Operators.sum
  }



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
        <ButtonCalc text="7" action={buidNumber}/>
        <ButtonCalc text="8" action={buidNumber}/>
        <ButtonCalc text="9" action={buidNumber}/>
        <ButtonCalc text="X" action ={btnMultiply} color="#FF9427" />
        {/* #2D2D2D  dark gray */}
      </View>
      <View style={styles.row}>
        {/* Button */}
        <ButtonCalc text="4" action={buidNumber} />
        <ButtonCalc text="5" action={buidNumber}/>
        <ButtonCalc text="6" action={buidNumber}/>
        <ButtonCalc text="-" action ={btnRest} color="#FF9427" />
        {/* #2D2D2D  dark gray */}
      </View>
      <View style={styles.row}>
        {/* Button */}
        <ButtonCalc text="1" action={buidNumber}/>
        <ButtonCalc text="2" action={buidNumber}/>
        <ButtonCalc text="3" action={buidNumber}/>
        <ButtonCalc text="+" action ={btnSum} color="#FF9427" />
        {/* #2D2D2D  dark gray */}
      </View>
      <View style={styles.row}>
        {/* Button */}
        <ButtonCalc text="0" action={buidNumber} widther />
        <ButtonCalc text="." action ={buidNumber} />
        <ButtonCalc text="=" action ={clear} color="#FF9427" />
        {/* #2D2D2D  dark gray */}
      </View>
    </View>

  )
}
