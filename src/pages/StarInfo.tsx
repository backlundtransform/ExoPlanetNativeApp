import * as React from 'react';
import {AppRegistry, StyleSheet, View,ScrollView  } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text,Thumbnail } from 'native-base';
import{resource} from '../config/Resource'
import styles from '../styles/defaultStyle'
import {Gradient} from '../styles/radialgradients'
import Svg,{Circle,G,ClipPath,Path,Image,Rect, Use,Defs,} from 'react-native-svg';
interface StarProps{navigation:any}
interface  StarPropsState { }
export default class StarInfo extends React.Component<StarProps, StarPropsState> {
    constructor(props) {
        super(props);

      }
    
  render() {
    const {planet}= this.props.navigation.state.params


    return (
      <View style={{ flex:1}}>
      <ScrollView  style={styles.infoMainContent}>  
             <Svg
            height="300" 
            width="300" 
       >      { Gradient(planet.Star)}
      <G>
    
     <Circle 
      cx="150" cy="130" r="120" 
 
      fill={`url(#${planet.Star.Type})`}/></G>
    </Svg>
             
              <Body>
              <Text style={styles.listText}></Text>
              <Text style={styles.listText}>{`${resource.starname[0]} ${planet.Star.Name} ${resource.starname[1]} ${resource.const[planet.Star.Constellation-1]&&resource.const[planet.Star.Constellation-1]}.` } {`${planet.Star.Luminosity===12?resource.startype[0]: resource.startype[1] +
                ' '+ resource.color[planet.Star.Color-1] } ${resource.mag[planet.Star.Magnitude-1]} ` }</Text>
            
                   <Text style={styles.listText}> </Text>
            
                 <Text style={styles.listText}>{resource.habzone[0]} {planet.Star.HabZoneMin} {resource.habzone[1]} {planet.Star.HabZoneMax} </Text>
   
         
                        <Text style={styles.listText}></Text>
               <Text style={styles.listText}></Text>
          
       

   <Text style={styles.listText}></Text>
               <Text style={styles.listText}></Text><View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>
                <View style={{ flex: 1, alignSelf: 'stretch' }} >{planet.Mass&&<Text style={styles.listText}>{`${resource.planetinfo[0]}`}</Text>}</View>
                <View style={{ flex: 1, alignSelf: 'stretch' }} >{planet.Mass&&<Text style={styles.listText}>{`${planet.Mass}*${resource.earth }`}</Text>}</View>
              </View><View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>
                <View style={{ flex: 1, alignSelf: 'stretch' }} >{planet.Radius&&<Text style={styles.listText}>{`${resource.planetinfo[1]}`}</Text>}</View>
                <View style={{ flex: 1, alignSelf: 'stretch' }} >{planet.Radius&&<Text style={styles.listText}>{`${planet.Radius}*${resource.earth }`}</Text>}</View>
              </View><View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>
                <View style={{ flex: 1, alignSelf: 'stretch' }} >{planet.Density&&<Text style={styles.listText}>{`${resource.planetinfo[2]}`}</Text>}</View>
                <View style={{ flex: 1, alignSelf: 'stretch' }} >{planet.Density&&<Text style={styles.listText}>{`${planet.Density}*${resource.earth }`}</Text>}</View>
              </View><View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>
                <View style={{ flex: 1, alignSelf: 'stretch' }} >{planet.Gravity&&<Text style={styles.listText}>{`${resource.planetinfo[3]}`}</Text>}</View>
                <View style={{ flex: 1, alignSelf: 'stretch' }} >{planet.Gravity&&<Text style={styles.listText}>{`${planet.Gravity}*${resource.earth }`}</Text>}</View>
              </View><View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>
                <View style={{ flex: 1, alignSelf: 'stretch' }} >{planet.SurfacePressure&&<Text style={styles.listText}>{`${resource.planetinfo[4]}`}</Text>}</View>
                <View style={{ flex: 1, alignSelf: 'stretch' }} >{planet.SurfacePressure&&<Text style={styles.listText}>{`${planet.SurfacePressure}*${resource.earth }`}</Text>}</View>
              </View><View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>
                <View style={{ flex: 1, alignSelf: 'stretch' }} >{planet.EscapeVelocity&&<Text style={styles.listText}>{`${resource.planetinfo[5]}`}</Text>}</View>
                <View style={{ flex: 1, alignSelf: 'stretch' }} >{planet.EscapeVelocity&&<Text style={styles.listText}>{`${planet.EscapeVelocity}*${resource.earth }`}</Text>}</View>
              </View>
                <Text style={styles.listText}></Text>
                        <Text style={styles.listText}></Text>
                        <Text style={styles.listText}></Text><Text style={styles.listText}></Text>
                        <Text style={styles.listText}></Text><Text style={styles.listText}></Text>
                        <Text style={styles.listText}></Text><Text style={styles.listText}></Text>
                        <Text style={styles.listText}></Text><Text style={styles.listText}></Text>
                        <Text style={styles.listText}></Text><Text style={styles.listText}></Text>
                        <Text style={styles.listText}></Text>

                
              </Body>
             
           
              </ScrollView>
              </View>
        
 
    );
  }
}