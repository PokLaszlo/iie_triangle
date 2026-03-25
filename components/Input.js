import { StyleSheet, Text, TextInput, View } from 'react-native'

const Input = ({title, onChangeText, value}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Input</Text>
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

const styles = StyleSheet.create({})