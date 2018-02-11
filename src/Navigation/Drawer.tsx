import { DrawerNavigator,StackNavigator } from 'react-navigation';

import * as React from 'react';
import { Text } from 'react-native';

export const Drawer =  DrawerNavigator({


    Planet: { screen: (<Text>{"PlanetList"}</Text>)},

    Constellation: { screen: (<Text>{"Constellations"}</Text>)}

})