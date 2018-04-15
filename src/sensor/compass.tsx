import * as React from 'react';
import {AppRegistry, StyleSheet, View , Dimensions} from 'react-native';
import { Container,Text, Content, Footer } from 'native-base';
import{resource} from '../config/Resource'
import styles from '../styles/defaultStyle'

interface compassProps{longitude:number, latitude:number, altitude:number, azimuth:number,rightascension:number,declination:number, siderealtime:string, gps:boolean}
interface  StarPropsState { }

export default class Compass extends React.Component<compassProps, any> {
    constructor(props) {
        super(props);

      }
    
  render() {
    const {longitude, latitude, altitude, azimuth,rightascension,declination,siderealtime,gps}= this.props

    let {width} = Dimensions.get('window');
    width=width/3
    const margin ={width: width, marginLeft:10}
    return (<Footer style={styles.compasscontainer}>
      <View style={styles.compassview}>
        <View style={margin}>
                <Text  >{"long:"+longitude.toFixed(2)}</Text>
                {gps?  <Text >{"alt:"+altitude.toFixed(2)} </Text>:null}
                <Text >{"ra:"+rightascension.toFixed(2)} </Text>
          </View>
      <View style={margin} >
      {gps?  <Text style={styles.sidereal} >{siderealtime} </Text>:null}
      </View>
      <View style={margin}>
              <Text >{"lat:"+latitude.toFixed(2)} </Text>
             {gps? <Text >{"az:"+azimuth.toFixed(2)} </Text>:null}
              <Text >{"dec:"+declination.toFixed(2)} </Text>       
      </View>
      </View>
      </Footer>
);
  }
}