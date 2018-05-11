import * as React from 'react';
import {AppRegistry, StyleSheet, Text, View, Button} from 'react-native';

import{resource} from './src/config/Resource'
import { Drawer } from './src/navigation/Drawer'

import { AppNavigator } from './src/navigation/AppNavigator'
import styles from './src/styles/defaultStyle';
import PlanetInfo  from './src/pages/PlanetInfo'
import Planets  from './src/pages/Planets'
import  HamburgerMenu from './src/navigation/HamburgerMenu'
import { Provider } from 'react-redux';
import store from './src/store';
import {
  StackNavigator,
} from 'react-navigation';


class App extends React.Component {
  render() {
    return (<Provider store={store}>
 <AppNavigator/></Provider>

    );
  }
}

AppRegistry.registerComponent('ExoPlanetHunter', () =>  App);
export default   App;