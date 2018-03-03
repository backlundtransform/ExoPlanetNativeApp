import * as React from 'react';
import {AppRegistry, StyleSheet, Text, View, Button} from 'react-native';
import PlanetInfo  from '../pages/PlanetInfo'
import StarInfo  from '../pages/StarInfo'
import Planets  from '../pages/Planets'


import {
  StackNavigator, TabNavigator
} from 'react-navigation';

const InfoNavigator = TabNavigator({
 Planet: { screen: PlanetInfo },
Star: { screen: StarInfo },

})
 const PlanetsNavigator = StackNavigator({

     planets: { screen: Planets,
    
        navigationOptions:({ navigation, screenProps }) => ( {
      
        })
    
    },
     infopages: { screen: InfoNavigator },

}, {
  headerMode: 'none' 
});
export default  PlanetsNavigator