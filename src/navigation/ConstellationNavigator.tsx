import * as React from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native'
import Planets  from '../pages/Planets'
import Solarsystem  from '../pages/Solarsystem'
import Constellations from '../pages/Constellations';
import styles from '../styles/defaultStyle'

import  Simulator  from '../pages/Simulator'
import {
  StackNavigator
} from 'react-navigation';

const ConstellationNavigator = StackNavigator({
    constellationlist: { screen: Constellations ,

  },
  solarlist: { screen: Solarsystem

}, d3view: { screen: Simulator,}}, {
      headerMode: 'none' 
    });
     export default  ConstellationNavigator