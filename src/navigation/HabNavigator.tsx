import * as React from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native'

import Planets  from '../pages/Planets'
import HabPlanets from '../pages/HabPlanets';
import styles from '../styles/defaultStyle'

import  HamburgerMenu from './HamburgerMenu'
import {
  StackNavigator
} from 'react-navigation';

const HabNavigator = StackNavigator({
  habplanet: { screen: HabPlanets,

  },
  planetlist: { screen: Planets,
 }}, {
      headerMode: 'none' 
    });
     export default  HabNavigator


     