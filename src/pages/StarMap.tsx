import * as React from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import {AppRegistry, StyleSheet, View,Platform } from 'react-native';
import{resource} from '../config/Resource'
import{geojson} from '../config/geojson'
import MapView from 'react-native-maps';
import { LocalTile,  UrlTile,Marker,  Polyline, Callout } from 'react-native-maps';
import  HamburgerMenu from '../navigation/HamburgerMenu'
import { Dimensions } from 'react-native'
import{PlanetList } from '../service/getPlanets'
import{SolarSystem } from '../service/getSolarSystem'

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

     zoom:7,
     rightascension:start.longitude/15,
     declination:start.latitude,
  
    };

  }


onRegionChange(region) {
      
    const { height, width } = Dimensions.get('window')

    const rightascension = 12 + -1*region.longitude/15
    const declination =region.latitude
    const zoom =Math.log2(360 * ((width/256) / region.longitudeDelta)) + 1
this.setState({rightascension,declination, region,zoom})

  }
  navigateToPlanet=(planet:any)=>{

  this.props.navigation.navigate("d3view",{navigation:planet})
       }
 
  render() {
  
 const{region, zoom, rightascension,declination }= this.state;

    return (<Container      style={styles.container}>
<MapView
        mapType={Platform.OS == "android" ? "none" : "standard"}
        style={styles.map}
        initialRegion={start}
        showsCompass={true}
        minZoomLevel={6}
        maxZoomLevel={9}
       onRegionChange={(region)=> this.onRegionChange(region)}
   
      ><UrlTile urlTemplate="https://raw.githubusercontent.com/gbanm/ExoPlanetService/master/ExoPlanetHunter.Web/Content/tiles/{z}/tile.png"  />
        {PlanetList.filter(p=>p.Esi>=0.7 && p.Coordinate!==undefined).map((planet,index) =>  (
    <Marker
  
      key={planet.Name}
      coordinate={planet.Coordinate}
      title={planet.Name}
     image={require('../images/marker.png')}
      onPress={p=> this.navigateToPlanet(planet)}
    />) ) }
    
    {geojson.features.filter(p=>p.geometry.type=="Point").map((star,index) =>  (
 <Marker
     coordinate={{  latitude:star.geometry.coordinates[1] as number,longitude:star.geometry.coordinates[0] as number}}
      key={"star"+ index}
      image={require('../images/smarker.png')}
      title={star.properties.name}
      description={star.properties.constellation}
 ></Marker>) )}{geojson.features.filter(p=>p.geometry.type=="LineString").map((line,index) =>  (
      <Polyline
      key={"line"+ index}
       coordinates={(line.geometry.coordinates as number[][]).map(p=> { return {latitude:p[1] as number,longitude:p[0] as number}}) }
      strokeColor="#add7ed" 
       strokeWidth={1}
       zIndex={1000000}
   />))}
   </MapView>
<Header><Left>
 <Text>
      { "Ra: "+rightascension}    
        </Text><Text>
      { "Dec: "+declination}    
        </Text></Left>
      </Header>
    </Container>)
  }
}



