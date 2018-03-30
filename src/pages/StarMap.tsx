import * as React from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import {AppRegistry, StyleSheet, View,Platform } from 'react-native';
import{resource} from '../config/Resource'
import MapView from 'react-native-maps';
import { LocalTile,  UrlTile  } from 'react-native-maps';
import  HamburgerMenu from '../navigation/HamburgerMenu'
const styles = StyleSheet.create({
  container: {
    
    height: 700,
    width: 700,
    backgroundColor: '#000000',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#000000',
    height: 500,
    width: 700,
  },
});
export default class StarMap extends React.Component<any, any> {

  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 30,
        longitude: 30,
        latitudeDelta: 20,
        longitudeDelta: 20,
     }
    };
  }

  
  onRegionChange(region) {
           console.log(region);
this.setState({region:region})
  }

  render() {
    const start =  {
      latitude: 51,
      longitude: 0,
      latitudeDelta: 20,
      longitudeDelta: 20,
   } 

    return ( <MapView
        mapType={Platform.OS == "android" ? "none" : "standard"}
        style={styles.map}
        region={start}
       onRegionChange={(region)=>console.log(region)}
      ><UrlTile urlTemplate="https://raw.githubusercontent.com/gbanm/ExoPlanetNativeApp/feature-mapcomponent/src/tiles/{x}.png"  />
      </MapView>
    
     )
  }
}



