import * as React from 'react';
import {AppRegistry, StyleSheet, View,ScrollView  } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text,Thumbnail } from 'native-base';
import{resource} from '../config/Resource'
import styles from '../styles/defaultStyle'
import {Gradient} from '../styles/radialgradients'
import Svg,{Circle,G,ClipPath,Path,Image,Rect, Use,Defs,} from 'react-native-svg';
import { Planet } from '../service/getPlanets';
interface StarProps{navigation:any}
interface  StarPropsState { }
export default class StarInfo extends React.Component<StarProps, StarPropsState> {
    constructor(props) {
        super(props);

      }
    
      getPlanetText=(planet:Planet):string=>{
        const knownhabplanets = planet.star.noHabPlanets
        const knownplanets = planet.star.noPlanets

      
        
        if(knownhabplanets>=1 && knownplanets>1){

          
          if(knownhabplanets===1){

            return `${resource.numberplanet[1]} ${knownplanets} ${resource.numberplanet[2]} ${resource.numberplanet[0]}`;
          }
          return `${resource.numberplanet[1]} ${knownplanets} ${resource.numberplanet[2]} ${knownhabplanets} ${resource.numberplanet[3]}`;
        }
        
        
        if(knownhabplanets==0 && knownplanets>1){

          return `${resource.numberplanet[1]} ${knownplanets} ${resource.numberplanet[4]}` 

        }

        if(knownhabplanets==0 && knownplanets==1){

          return `${resource.numberplanet[5]}` 
        }


      }
  render() {

  
    const {planet}= this.props.navigation.state.params
  

    const planetext =this.getPlanetText(planet)
    return (
      <View style={{ flex:1}}>
      <ScrollView  style={styles.infoMainContent}>  
             <Svg
            height="300" 
            width="300" 
       >      { Gradient(planet.star)}
      <G>
    
     <Circle 
      cx="150" cy="130" r="120" 
 
      fill={`url(#${planet.star.type})`}/></G>
    </Svg>
             
              <Body>
              <Text style={styles.listText}></Text>
              <Text style={styles.listText}>{`${resource.starname[0]} ${planet.star.name} ${resource.starname[1]} ${resource.const[planet.star.constellation-1]&&resource.const[planet.star.constellation-1]}.` } {`${planet.star.luminosity===12?resource.startype[0]: resource.startype[1] +
                ' '+ resource.color[planet.star.color-1] } ${resource.mag[planet.star.magnitude-1]} ` }</Text>
            
                   <Text style={styles.listText}> </Text>
            
                 <Text style={styles.listText}>{planet.star.habZoneMin !==undefined && planet.star.habZoneMax !==undefined ?  `${resource.habzone[0]} ${planet.star.habZoneMin} ${resource.habzone[1]} ${planet.star.habZoneMax}`:null} </Text>
                 <Text style={styles.listText}>{ planetext}</Text>
        
                        <Text style={styles.listText}></Text>
               <Text style={styles.listText}></Text>
          
       

   <Text style={styles.listText}></Text>
               <Text style={styles.listText}></Text><View style={ styles.infocontainer}>
                <View style={styles.infotext} >{planet.star.mass&&<Text style={styles.listText}>{`${resource.starinfo[0]}`}</Text>}</View>
                <View style={styles.infotext} >{planet.star.mass&&<Text style={styles.listText}>{`${planet.star.mass}*${resource.oursun}`}</Text>}</View>
              </View><View style={styles.infocontainer}>
                <View style={styles.infotext} >{planet.star.radius&&<Text style={styles.listText}>{`${resource.starinfo[1]}`}</Text>}</View>
                <View style={styles.infotext} >{planet.star.radius&&<Text style={styles.listText}>{`${planet.star.radius}*${resource.oursun }`}</Text>}</View>
              </View><View style={styles.infocontainer}>
                <View style={styles.infotext} >{planet.star.age&&<Text style={styles.listText}>{`${resource.starinfo[2]}`}</Text>}</View>
                <View style={styles.infotext} >{planet.star.age&&<Text style={styles.listText}>{`${planet.star.age}`}</Text>}</View>
              </View><View style={styles.infocontainer}>
                <View style={styles.infotext} >{planet.star.temp&&<Text style={styles.listText}>{`${resource.starinfo[3]}`}</Text>}</View>
                <View style={styles.infotext} >{planet.star.temp&&<Text style={styles.listText}>{`${planet.star.temp} C`}</Text>}</View>
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