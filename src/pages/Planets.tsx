import * as React from 'react';
import {AppRegistry, StyleSheet, Text, View } from 'react-native';
import{resource} from '../config/Resource'
import { Drawer } from '../navigation/Drawer'
import styles from '../styles/defaultStyle'
export default class Planets extends React.Component {
  
  static navigationOptions = {
    title: resource.planetlist,
  };
  
  render() {
 
    return (
        <View style={styles.container}>
        <Text style={styles.bigblue}> {resource.planetlist}
        </Text>
      </View>

    );
  }
}

