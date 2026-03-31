/*
  File: TriangleScreen.js
  Author: Pók László,
  Copyright: 2026, Pók László
  Group: Szoft II-N
  Date: 2026-03-31
  Github: https://github.com/poklaszlo
  Licenc: MIT
*/
import { StyleSheet, Text, View } from 'react-native'
import { useState } from 'react'
import Input from '../components/Input'
import MyButton from '../components/MyButton'
import { calcArea } from '../utils/triangle'

const TriangleScreen = ({ navigation }) => {
  const [aSide, setASide] = useState("")
  const [bSide, setBSide] = useState("")
  const [cSide, setCSide] = useState("")
  const [area, setArea] = useState("")

  function startCalc() {
    console.log("Működik a számítás?")
    const res = calcArea(
      Number(aSide), 
      Number(bSide), 
      Number(cSide)
    )
    setArea(res.toFixed(2))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TriangleScreen</Text>
      <Input title="'A' oldal" onChangeText={aSide => setASide(aSide)} />
      <Input title="'B' oldal" onChangeText={bSide => setBSide(bSide)} />
      <Input title="'C' oldal" onChangeText={cSide => setCSide(cSide)} />
      <MyButton title="Számít" onPress={() => startCalc()}/>
      <Input title="Terület" value={area}/>
    </View>
  )
}

export default TriangleScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    flex:1
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color:"white",
    margin:10,
    fontStyle:"italic",
    textDecorationLine:"underline"
  },
})