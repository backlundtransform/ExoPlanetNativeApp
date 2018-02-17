import * as React from 'react';
import {AppRegistry, StyleSheet, Text, View } from 'react-native';
import styles from '../styles/defaultStyle'
import{resource} from '../config/Resource'
import { Drawer } from '../navigation/Drawer'
export default class Constellations extends React.Component {


  static navigationOptions = {
    title: resource.con,
  };
  render() {

    return (
        <View style={styles.container}>
        <Text style={styles.bigblue}> {resource.con}
        </Text>
      </View>
    );
  }
}

