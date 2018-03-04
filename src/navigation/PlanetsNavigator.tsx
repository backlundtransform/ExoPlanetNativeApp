import * as React from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native'
import PlanetInfo  from '../pages/PlanetInfo'
import StarInfo  from '../pages/StarInfo'
import Planets  from '../pages/Planets'
import styles from '../styles/defaultStyle'
import  TabBar  from './TabBar';
import  InfoNavigator  from './InfoNavigator';
import {  Button, Left, Icon ,Header ,Right} from 'native-base'
import {
  StackNavigator
} from 'react-navigation';


 const PlanetsNavigator = StackNavigator({

     planets: { screen: Planets
    },
     infopages: { screen: InfoNavigator ,  
    
      navigationOptions:({ navigation, screenProps }) => ( {
        header:(<Header 

        style={styles.headercontent}>
        <Left style={styles.left}>
          <Button transparent onPress={() =>navigation.navigate("planets")} >
              <Icon style={styles.white} name={ "md-arrow-back"}  />
            </Button>
            </Left><Right></Right>
        </Header>),
        
        
      }),    
      
        
    },

}, {
  headerMode: 'none' 
});
export default  PlanetsNavigator