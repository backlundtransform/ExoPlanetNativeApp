import { DrawerNavigator } from 'react-navigation';
import{resource} from '../config/Resource'
import * as React from 'react';

import Planets from '../pages/Planets';
import HabPlanets from '../pages/HabPlanets';
import Constellations from '../pages/Constellations';
import StarMap from '../pages/StarMap';
import { Icon,Text,ListItem, Content} from "native-base";
import SidebarContent from './SideBarContent'
import styles from '../styles/defaultStyle';
import  HamburgerMenu from './HamburgerMenu'

import  NavListItems from './NavListItems'
const appRoutes ={
    planets: { screen: Planets, label: resource.planetlist,  
    
      navigationOptions:({ navigation, screenProps }) => ( {
        title: resource.planetlist,
        headerLeft:  <HamburgerMenu navigate ={navigation}/>,
        headerStyle: styles.container,
       
        drawerLabel: () =>
       <NavListItems title={resource.planetlist} icon={'md-planet'} /> 
      })
    
    },  habplanets: { screen: HabPlanets, label: resource.habplanets,  
    
        navigationOptions:({ navigation, screenProps }) => ( {
          title: resource.habplanets,
          headerLeft:  <HamburgerMenu navigate ={navigation}/>,
        
          drawerLabel: () =>
         <NavListItems title={resource.habplanets} icon={'globe'} /> 
        })
      
      },
    constellations: { screen: Constellations,label: resource.con,
        navigationOptions:({ navigation, screenProps }) => ( {
            title: resource.con,
            headerLeft:  <HamburgerMenu navigate ={navigation}/>,
            drawerLabel: () => 
            <NavListItems title={resource.con} icon={'star'} /> 
          })

    },
    map: { screen: StarMap,label: resource.starmap,
    
        navigationOptions:({ navigation, screenProps }) => ( {
            title:resource.starmap,
            headerLeft:  <HamburgerMenu navigate ={navigation}/>,
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
 headerMode: 'none'

  })