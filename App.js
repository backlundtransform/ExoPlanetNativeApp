import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import{resource} from './src/config/Resource'

export default class App extends React.Component {
  render() {

    return (
        <View style={styles.container}>
        <Text style={styles.bigblue}> {resource.message}
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