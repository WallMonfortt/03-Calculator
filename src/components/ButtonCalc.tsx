import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;


interface Props {
    text: string;
    color?: string;
    widther?: boolean;
}

export const ButtonCalc = ({text, color = '#2D2D2D', widther = false}: Props) => {
  return (
    < TouchableOpacity activeOpacity={0.8} >
        <View style={{
            ...styles.button,
            backgroundColor: color,
        }}>
            <Text style={{
                ...styles.textButton,
                color: color === '#9B9B9B' ? 'black' : 'white',
                width: widther ? 2 * screenWidth * 0.21 : screenWidth * 0.2,
            }}>
                {text}
            </Text>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
        height: screenWidth * 0.2,
        // width: 80,
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: screenWidth * 0.01,
    },
    textButton: {
        textAlign: 'center',
        padding: screenWidth * 0.01,
        fontSize: 30,
        color: 'white',
        fontWeight: '300',
    },
});
