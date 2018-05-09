import * as React from 'react';

import { Drawer } from './Drawer'
import styles from '../styles/defaultStyle';

import  HamburgerMenu from './HamburgerMenu'
import { Provider } from 'react-redux';

import {
  StackNavigator,
} from 'react-navigation';


export const AppNavigator = StackNavigator({
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
