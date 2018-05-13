import * as React from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native'
import PlanetInfo  from '../pages/PlanetInfo'
import StarInfo  from '../pages/StarInfo'
import Planets  from '../pages/Planets'
import  Simulator  from '../pages/Simulator'
import styles from '../styles/defaultStyle'
import  TabBar  from './TabBar';
import  InfoNavigator  from './InfoNavigator';
import {  Button, Left ,Header ,Right} from 'native-base'
import Icon from 'react-native-vector-icons/MaterialIcons';
import  HamburgerMenu from './HamburgerMenu'
import SearchPage  from '../pages/SearchPage'
import DashBoard  from '../pages/DashBoard'
import {
  StackNavigator
} from 'react-navigation';


 const PlanetsNavigator = StackNavigator({

     planets: { screen: Planets,
    
      navigationOptions:({ navigation, screenProps }) => ( {
  
        headerLeft:  <HamburgerMenu navigate ={navigation}  />,
        headerStyle: styles.headerstyle,
        
      
      })},
     d3view: { screen: Simulator,
      navigationOptions:({ navigation, screenProps }) => ( {
        header: null
     })},
     infopages: { screen: InfoNavigator,  
    
      navigationOptions:({ navigation, screenProps }) => ( {
        header:(<Header 

        style={styles.headercontent}>
        <Left style={styles.left}>
          <Button transparent onPress={() =>navigation.navigate("planets")} >
              <Icon style={styles.white} name={ "keyboard-arrow-left"}   size={36} />
            </Button>
            </Left><Button  style={styles.d3button}  transparent onPress={() =>navigation.navigate("d3view",{navigation:navigation})} >
            <Icon style={styles.white} name={"3d-rotation"} size={36} />
            </Button>
        </Header>), 
      }),    
   
    },  search: { screen: SearchPage,
    
      navigationOptions:({ navigation, screenProps }) => ( {
  
        headerLeft:  <HamburgerMenu navigate ={navigation}  />,
        headerStyle: styles.headerstyle,
        
      
      })},
      dashboard: { screen: DashBoard,
    
        navigationOptions:({ navigation, screenProps }) => ( {
    
          headerLeft:  <HamburgerMenu navigate ={navigation}  />,
          headerStyle: styles.headerstyle,
          
        
        })},  
}
, {
  headerMode: 'none' 
});
export default  PlanetsNavigator