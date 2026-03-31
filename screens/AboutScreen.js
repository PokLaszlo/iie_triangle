/*
  File: AboutScreen.js
  Author: Pók László,
  Copyright: 2026, Pók László
  Group: Szoft II-N
  Date: 2026-03-31
  Github: https://github.com/poklaszlo
  Licenc: MIT
*/
import { StyleSheet, Text, View } from 'react-native'


const AboutScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.aboutText}>
        Készítő: Pók László<br/>
        Csoport: Szoft II-N<br/>
        Dátum: 2026-03-31
      </Text>
    </View>
  )
}

export default AboutScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderRadius:40,
    width:"60%",
    marginTop:"50%",
    margin:"auto"
  },
  aboutText: {
    fontSize: 32,
    fontWeight: 'bold',
    color:"white",
    margin:10,
    fontStyle:"italic",
    textDecorationLine:"underline",
    textAlign:"center"
  },
})
