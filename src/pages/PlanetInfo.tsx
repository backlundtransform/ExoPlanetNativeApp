import * as React from 'react';
import {AppRegistry, StyleSheet, View,ScrollView  } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text,Thumbnail, } from 'native-base';
import{resource} from '../config/Resource'
import{Planet} from '../service/getPlanets'
import styles from '../styles/defaultStyle'


import Svg,{
  Circle,

  ClipPath,
  Path,
  Image,
 
  Use,
  Defs,

} from 'react-native-svg';
interface PlanetProps{navigation:any}
interface  PlanetPropsState { }
export default class PlanetInfo extends React.Component<PlanetProps, PlanetPropsState> {
    constructor(props) {
        super(props);

      }
    
  render() {
    const {planet}= this.props.navigation.state.params


    return (
      <View style={{ flex:1}}>
      <ScrollView>   
           <Container style={styles.darkcontainer}>
        <Content  style={styles.infoContent}>
      <Svg
    height="300" 
    width="300" 
>
    <Defs>
        <ClipPath id="clip">
            <Circle cx="150" cy="150" r="120" fill="#FFFFFF" />
        </ClipPath>
    </Defs>

    <Image
     
     width="300" height="300" 
        href={planet.Img} 
        clipPath="url(#clip)"
    />
   
</Svg>

             
         
              <Text style={styles.listText}></Text>
              <Text style={styles.listText}>{`${resource.planetname[0]}  ${planet.Name} ${resource.planetname[1]}  ${planet.Star.Name}  ${resource.planetname[2]} ${resource.const[planet.Star.Constellation-1]}` } {`${resource.decFormatdist[0]}${planet.Distance} ${resource.decFormatdist[1]} ` }</Text>
            
                   <Text style={styles.listText}> </Text>
            
                 <Text style={styles.listText}>{resource.massInfo[planet.Type]} </Text>
                 <Text style={styles.listText}>{resource.compInfo[planet.Comp]} </Text>
         
                 <Text style={styles.listText}> </Text>
                 <Text style={styles.listText}> </Text>
           
                <Text style={styles.listText}>{`${resource.orbit[0]} ${planet.Period} ${resource.orbit[1]} ${resource.decMean[0]} ${planet.MeanDistance} ${resource.decMean[1]}`}</Text>
       
               <Text style={styles.listText}></Text>
               <Text style={styles.listText}>{`${resource.hzd[planet.Hzd]} ${resource.hza[planet.Hza]} ${resource.atmosinfo[planet.Atmosphere]}`}</Text>
               <Text style={styles.listText}></Text>
                      <Text style={styles.listText}></Text>  
                      <Text style={styles.listText}></Text>  
                      <Text style={styles.listText}></Text>
                    
                      </Content >
        </Container></ScrollView>
                      </View>
 

    );
  }
}
