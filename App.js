/*
  File: App.js
  Author: Pók László,
  Copyright: 2026, Pók László
  Group: Szoft II-N
  Date: 2026-03-31
  Github: https://github.com/poklaszlo
  Licenc: MIT
*/

import { NavigationContainer } from '@react-navigation/native';
import RouteStack from './RouteStack';

export default function App() {
  return (
    <NavigationContainer>
      <RouteStack />
    </NavigationContainer>
  );
}
