import * as React from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import {AppRegistry, StyleSheet, View,Platform } from 'react-native';
import{resource} from '../config/Resource'
import MapView from 'react-native-maps';
import { LocalTile,  UrlTile,Marker } from 'react-native-maps';
import  HamburgerMenu from '../navigation/HamburgerMenu'
import { Dimensions } from 'react-native'
import{PlanetList } from '../service/getPlanets'

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
const start =  {
  latitude: 51,
  longitude: 0,
  latitudeDelta: 5,
  longitudeDelta: 5,
} 
export default class StarMap extends React.Component<any, any> {

  constructor(props) {
    super(props);
    this.state = {
      region:  start,
     zoom:7
    };

  }

 // n = 2 ^ zoom
//xtile = n * ((lon_deg + 180) / 360)
//ytile = n * (1 - (log(tan(lat_rad) + sec(lat_rad)) / π)) / 2
onRegionChange(region) {
      
    const { height, width } = Dimensions.get('window')
       
      
    this.setState({region:region,zoom:Math.log2(360 * ((width/256) / region.longitudeDelta)) + 1})

  }
  navigateToPlanet=(planet:any)=>{

    this.props.navigation.navigate('infopages', {planet:PlanetList.find(p=>p.Name==planet.Name)})
       }
 
  render() {
   
 const{region, zoom}= this.state;
    return ( <MapView
        mapType={Platform.OS == "android" ? "none" : "standard"}
        style={styles.map}
        initialRegion={start}
   
        minZoomLevel={6}
        maxZoomLevel={9}
       onRegionChange={(region)=> this.onRegionChange(region)}
   
      ><UrlTile urlTemplate="https://raw.githubusercontent.com/gbanm/ExoPlanetService/master/ExoPlanetHunter.Web/Content/tiles/{z}/tile.png"  />
        {PlanetList.filter(p=>p.Esi>=0.7 && p.Coordinate!==undefined).map(planet =>  (
    <Marker
    ref={(e)=>{e!==null?e.showCallout():e}}
    key={planet.Name}
      coordinate={planet.Coordinate}
      title={planet.Name}
 
      image={require('../images/marker.png')}
      onPress={p=> this.navigateToPlanet(planet)}
    />) ) }
  
      </MapView>
    
     )
  }
}



