import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ExoPlanet from './src/ExoPlanet'

export default class App extends React.Component {
  render() {

   
    return (
        <View style={styles.container}>
           <ExoPlanet />  
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
  },
});