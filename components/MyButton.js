/*
  File: MyButton.js
  Author: Pók László,
  Copyright: 2026, Pók László
  Group: Szoft II-N
  Date: 2026-03-31
  Github: https://github.com/poklaszlo
  Licenc: MIT
*/
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'

export default function MyButton({title, onPress}) {
    return (
        <TouchableHighlight style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    buttonText: {
        color: 'white',
        padding:13,
        fontSize: 22,
    },
    button: {
        backgroundColor: 'purple',
        borderRadius: 5
    }
})