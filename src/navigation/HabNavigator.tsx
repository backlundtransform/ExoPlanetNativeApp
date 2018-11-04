import Planets from '../pages/Planets'
import HabPlanets from '../pages/HabPlanets';

import {
  StackNavigator
} from 'react-navigation';

const HabNavigator = StackNavigator({
  habplanet: {
    screen: HabPlanets,

  },
  planetlist: {
    screen: Planets,
  }
}, {
  headerMode: 'none'
});
export default HabNavigator