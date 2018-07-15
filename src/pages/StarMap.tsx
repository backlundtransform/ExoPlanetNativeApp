import * as React from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text} from 'native-base';
import {AppRegistry, StyleSheet, View,Platform ,Image} from 'react-native';
import{resource} from '../config/Resource'
import{geolinesjson} from '../config/geojson'
import MapView from 'react-native-maps';
import { LocalTile,  UrlTile,Marker, Circle, Polyline, Callout } from 'react-native-maps';
import DrawPolyline from '../geocomponents/DrawPolyline'
import DrawStar  from '../geocomponents/DrawStar'
import DrawPlanet from '../geocomponents/DrawPlanet'
import  HamburgerMenu from '../navigation/HamburgerMenu'
import { Dimensions } from 'react-native'

import{SolarSystem } from '../service/getSolarSystem'
import { decorator as sensors } from "react-native-sensors";
import{siderealtime,dot_product,right_ascension,getdeclination } from '../sensor/mathfunctions'
import Compass from '../sensor/compass'
import RNSimpleCompass from 'react-native-simple-compass';
import {
  DeviceEventEmitter, NativeModules
} from 'react-native';
import { constants} from '../config/constants'


import styles from "../styles/defaultStyle";

import customMap from "../styles/customMap"

const start =  {
  latitude: 51,
  longitude: 0,
  latitudeDelta: 20,
  longitudeDelta: 10,
} 
interface StarmapProp { navigation:any, Accelerometer:any, gyroscop:any}
interface StarmapState {region: any,
  currentRegion?:any,
  degree:number,
 zoom:number,
 altitude:number,
 siderealtime:string
 rightascension:number,

 declination:number,gps:boolean}
 class StarMap extends React.Component<StarmapProp, StarmapState> {

  constructor(props) {
    super(props);
    this.state = {
      region:  start,
      degree:0,
     zoom:7,
  
     rightascension:start.longitude/15,
     declination:start.latitude,
     gps:false,
     altitude:0,
     siderealtime:""
    };

    setTimeout(()=>{  navigator.geolocation.getCurrentPosition(this.success, this.error)}, 100)
 
  }

 success=(pos)=> {
    var crd = pos.coords;

    if(this.refs.map && this.state.currentRegion=== undefined){
  
  this.setState({currentRegion:{latitude:crd.latitude, longitude:crd.longitude}});
   }

  };
  
error=(err)=> {


  };
  

  onRegionChangeComplete(region) {

if(!(this.state.gps)){
  const rightascension = 12 + -1*region.longitude/15
  const declination =region.latitude
  this.setState({rightascension,declination})
    }


    
  }


  componentWillReceiveProps(nextProps){

              
              let {region,currentRegion,altitude, degree,rightascension,declination}= this.state
           
              const gps = nextProps.navigation.state.params&&nextProps.navigation.state.params.gps
          if(this.state.currentRegion!== undefined && (gps!==undefined &&gps))
          {
               let rightascension =right_ascension(currentRegion.longitude,currentRegion.latitude,altitude, degree)/15
               const declination =getdeclination(currentRegion.latitude, altitude, degree)
   
            const longitude = 15*(rightascension-12)<0?15*Math.abs(rightascension-12):-15*Math.abs(rightascension-12)
  
            if(region.longitude+2<longitude ||region.longitude-2>longitude)
            {
            region = {
              latitude: declination,
              longitude: longitude,
              latitudeDelta: 10,
              longitudeDelta: 10,
            } 
            const altitude = dot_product(nextProps.Accelerometer.z,nextProps.Accelerometer.y,nextProps.Accelerometer.x,1,0,0)
            rightascension = rightascension
            this.setState({ gps, region,rightascension,declination, altitude, siderealtime:siderealtime(this.state.currentRegion.longitude) });
       
          }
        
      
          const degree_update_rate = 3;
          RNSimpleCompass.start(degree_update_rate, (degree) => {
          
                if(this.refs.map && (degree+2<this.state.degree ||degree-2>this.state.degree))
                {
                  this.setState({degree:  degree})
                }
                 RNSimpleCompass.stop();
         
                });
      
                }
                else
                {
                  this.setState({ gps:false})
                }
             }  

 
  render() {

 const{region, gps,rightascension,declination,degree ,currentRegion,altitude,siderealtime}= this.state;
 const {Accelerometer}= this.props


    return (<Container ref="map" style={styles.mapcontainer}>
  <MapView
        moveOnMarkerPress={false}
        mapType={ "standard" }
        style={styles.map}
        initialRegion={start}
        customMapStyle={customMap}
        region={gps?region:null}
        showsCompass={true}
        minZoomLevel={2}
        maxZoomLevel={4}
onRegionChangeComplete={(region)=> this.onRegionChangeComplete(region)}
><UrlTile urlTemplate={constants.tiles}  />
{currentRegion&&(<DrawPolyline  navigation ={this.props.navigation}/>)}{currentRegion&&(<DrawStar/>)}{currentRegion&&(<DrawPlanet navigation ={this.props.navigation}/>)}</MapView>
{currentRegion&&(<Compass longitude={currentRegion.longitude}  latitude={currentRegion.latitude}  azimuth={degree} altitude={altitude} rightascension={rightascension} declination={declination}   siderealtime={ siderealtime}  gps ={gps}/>)}
</Container>)
  }
}
 export default sensors({
  Accelerometer: {
      updateInterval: 300
  },
  Gyroscope: true,


})(StarMap);