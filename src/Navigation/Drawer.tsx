import { DrawerNavigator,StackNavigator } from 'react-navigation';
import{resource} from '../config/Resource'
import * as React from 'react';
import { Text } from 'react-native';
import Planets from '../pages/Planets';
import Constellations from '../pages/Constellations';
import StarMap from '../pages/StarMap';
export const Drawer =  DrawerNavigator({
   planets: { screen: Planets, label: resource.planetlist},
   constellations: { screen: Constellations,label: resource.con},
   map: { screen: StarMap,label: resource.starmap}
})