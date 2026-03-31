/*
  File: Input.js
  Author: Pók László,
  Copyright: 2026, Pók László
  Group: Szoft II-N
  Date: 2026-03-31
  Github: https://github.com/poklaszlo
  Licenc: MIT
*/
import { StyleSheet, Text, TextInput, View } from 'react-native'

const Input = ({title, onChangeText, value}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput 
        style={styles.input}
        title={title}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    marginTop:"10px",
    margin:"auto",
    alignItems: 'center',
    backgroundColor: 'lightblue',
    width:"60%"
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    fontStyle:"italic",
    textDecorationLine:"underline"
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    width:"80%",
    backgroundColor:"lightgrey"
  }
})