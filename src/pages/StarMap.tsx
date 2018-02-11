import * as React from 'react';
import {AppRegistry, StyleSheet, Text, View } from 'react-native';

import{resource} from '../config/Resource'
import { Drawer } from '../navigation/Drawer'
export default class StarMap extends React.Component {
  render() {

    return (
        <View style={styles.container}>
        <Text style={styles.bigblue}> {resource.starmap}
        </Text>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  
  },  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
});

AppRegistry.registerComponent('ExoPlanetHunter', () => Drawer );