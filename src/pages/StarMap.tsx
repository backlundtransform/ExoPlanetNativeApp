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

  }
  
  render() {


    return ( <View style={{
      height: 450,
      width: 350,
      backgroundColor: '#000000',
     
    }}><MapView
        mapType={Platform.OS == "android" ? "none" : "standard"}
        style={styles.map}
        region={this.state.region}
       onRegionChange={(region)=>this.onRegionChange(region)}
      ><UrlTile urlTemplate="https://github.com/gbanm/ExoPlanetNativeApp/blob/feature-mapcomponent/src/tiles/{x}.png"  />
      </MapView></View>
    
     )
  }
}



