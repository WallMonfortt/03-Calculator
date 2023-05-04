import { useRef, useState } from "react"

enum Operators {
    sum, rest, mult, div
  }

export const useCalculator = () => {
   
  const [prevNumber, setPrevNumber] = useState('0')
  const [number, setNumber] = useState('0')
  const lastOperation = useRef<Operators>()

  const clear = () => {
    setNumber('0')
    setPrevNumber('0')
  }

  const buildNumber = (textNumber: string) => {
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

  const calculate = () => {
    const num1 = Number(number)
    const num2 = Number(prevNumber)

    switch (lastOperation.current) {
      case Operators.sum:
        setNumber(`${num1 + num2}`)
        break;
      case Operators.rest:
        setNumber(`${num2 - num1}`)
        break;
      case Operators.mult:
        setNumber(`${num1 * num2}`)
        break;
      case Operators.div:
        setNumber(`${num2 / num1}`)
        break;

      default:
        break;
    }
    setPrevNumber('0')
  }

  return {
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
  }

}
