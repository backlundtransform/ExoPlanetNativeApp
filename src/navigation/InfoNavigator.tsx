import * as React from 'react';
import StarInfo from '../pages/StarInfo'
import TabBar from './TabBar';
import PlanetInfo from '../pages/PlanetInfo'
import {
  TabNavigator
} from 'react-navigation';

const InfoNavigator = TabNavigator({
    Planet: {
      screen: PlanetInfo,
    },
    Star: {
      screen: StarInfo
    },

  }, {

    tabBarComponent: ({
      navigation
    }) => < TabBar navigator = {
      navigation
    }
    />,


    tabBarPosition: 'top',
    animationEnabled: false,
    swipeEnabled: false
  }

)
export default InfoNavigator