/*
  File: RouteStack.js
  Author: Pók László,
  Copyright: 2026, Pók László
  Group: Szoft II-N
  Date: 2026-03-31
  Github: https://github.com/poklaszlo
  Licenc: MIT
*/

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen'
import TriangleScreen from './screens/TriangleScreen'
import AboutScreen from './screens/AboutScreen'

const Stack = createNativeStackNavigator()

const RouteStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Triangle" component={TriangleScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
    </Stack.Navigator>
  )
}

export default RouteStack
