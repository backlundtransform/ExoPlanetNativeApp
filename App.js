import * as React from 'react';
import {AppRegistry, StyleSheet, Text, View, Button} from 'react-native';

import{resource} from './src/config/Resource'
import { Drawer } from './src/navigation/Drawer'
import styles from './src/styles/defaultStyle';
import PlanetInfo  from './src/pages/PlanetInfo'
import Planets  from './src/pages/Planets'
import  HamburgerMenu from './src/navigation/HamburgerMenu'

import {
  StackNavigator,
} from 'react-navigation';


 const App = StackNavigator({
 first: { screen: Drawer,
  navigationOptions:({ navigation, screenProps }) => ( {
    headerStyle: styles.container,
    headerLeft:  <HamburgerMenu navigate ={navigation} />,
    handleNavigationState:(previous, next, action) =>  {
 
      
      return( <HamburgerMenu navigate ={null} />)
    
     },
  

  })
},  

} );


AppRegistry.registerComponent('ExoPlanetHunter', () => Drawer );
export default App;