import React from 'react';
import {AppRegistry, StyleSheet, Text, View, Button} from 'react-native';

import{resource} from './src/config/Resource'
import { Drawer } from './src/navigation/Drawer'

import Planets  from './src/pages/Planets'

import {
  StackNavigator,
} from 'react-navigation';

 const App = StackNavigator({
 first: { screen: Drawer },

});


AppRegistry.registerComponent('ExoPlanetHunter', () => Drawer );
export default App;