import { DrawerNavigator } from 'react-navigation';
import{resource} from '../config/Resource'
import * as React from 'react';

import Planets from '../pages/Planets';

import Constellations from '../pages/Constellations';
import StarMap from '../pages/StarMap';
import { Icon,Text,ListItem, Content,View} from "native-base";
import SidebarContent from './SideBarContent'
import styles from '../styles/defaultStyle';
import  HamburgerMenu from './HamburgerMenu'
import  GpsMenu from './GpsMenu'
import   PlanetsNavigator from './PlanetsNavigator'
import   HabNavigator from './HabNavigator'
import  NavListItems from './NavListItems'
import { Button, TouchableOpacity } from 'react-native';

const appRoutes ={
  
    planets: { screen: PlanetsNavigator,  
    
      navigationOptions:({ navigation, screenProps }) => ({
        
        headerLeft:  <HamburgerMenu navigate ={navigation}  />,
        headerStyle: styles.headerstyle,
        
      
        drawerLabel: () =>
  
       <NavListItems title={resource.planetlist} icon={'md-planet'} onPress={() => navigation.navigate("planets")} /> 

      })
    
    },  habplanets: { screen: HabNavigator, 
    
        navigationOptions:({ navigation, screenProps }) => ({
         
          headerLeft:  <HamburgerMenu navigate ={navigation}  />,
          headerStyle: styles.headerstyle,
      
          drawerLabel: () =>
         <NavListItems title={resource.habplanets} icon={'globe'} /> 
        })
      
      },
    constellations: { screen: Constellations,
        navigationOptions:({ navigation, screenProps }) => ( {
            
            headerLeft:  <HamburgerMenu navigate ={navigation}  />,
            headerStyle: styles.headerstyle,
          
            drawerLabel: () => 
            <NavListItems title={resource.con} icon={'star'} /> 
          })

    },
    map: { screen: StarMap,
        navigationOptions:({ navigation, gps }) => ( {
            headerLeft:  <HamburgerMenu navigate ={navigation}  />,
          
          headerRight:<GpsMenu navigate ={navigation} />,

            drawerLabel: () =>
            <NavListItems title={resource.starmap} icon={'map'} /> ,
          })   
          
        
    }
 }

export const Drawer =  DrawerNavigator(appRoutes, {
    initialRouteName: 'planets',
    drawerPosition: 'left',
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    contentComponent: props  => <SidebarContent{...props} />,

  })