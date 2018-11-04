import Solarsystem from '../pages/Solarsystem'

import Constellations from '../pages/Constellations'
import InfoNavigator from './InfoNavigator'


import Simulator from '../pages/Simulator'
import {
  StackNavigator
} from 'react-navigation';

const ConstellationNavigator = StackNavigator({
  constellationlist: {
    screen: Constellations,
  },
  solarlist: {
    screen: Solarsystem

  },
  d3view: {
    screen: Simulator,
  },
  infopages: {
    screen: InfoNavigator,
  }
}, {
  headerMode: 'none'
})
export default ConstellationNavigator