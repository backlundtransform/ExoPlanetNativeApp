import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';


interface Planet {
    name:string
}
export default class ExoPlanet extends React.Component {
  render() {

    const planet:Planet = {name:"ExoPlanetHunter"}
    return (
      <View style={styles.container}>
        <Text>{planet.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
