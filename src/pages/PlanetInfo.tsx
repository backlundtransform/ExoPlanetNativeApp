import * as React from 'react';
import {AppRegistry, StyleSheet, View,ScrollView  } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text,Thumbnail, } from 'native-base';
import{resource} from '../config/Resource'
import{Planet} from '../service/getPlanets'
import styles from '../styles/defaultStyle'
import {Gradient} from '../styles/radialgradients'
import RatingBar from '../components/RatingBar'
import Svg,{Circle,G,ClipPath,Path,Image,Rect, Use,Defs,

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
      <ScrollView  style={styles.infoMainContent}>   
       
  
      <Svg
            height="300" 
            width="300" 
       >      { Gradient(planet.Star)}
    <G>
    <Defs>
        <ClipPath id="clip">
            <Circle cx="150" cy="150" r="120"  />
        </ClipPath>
    </Defs>

    <Image
     width="300" height="300" 
        href={planet.Img} 
        clipPath="url(#clip)"
    />
    <Circle 
  cx="150" cy="150" r="120" 
   fillOpacity={0.6}
   fill={`url(#${planet.Type})`}/></G>
</Svg>

             
         
              <Text style={styles.listText}></Text>
              <Text style={styles.listText}>{`${resource.planetname[0]} ${planet.Name} ${resource.planetname[1]}  ${planet.Star.Name}  ${resource.planetname[2]} ${resource.const[planet.Star.Constellation-1]&&resource.const[planet.Star.Constellation-1]}` } {`${resource.decFormatdist[0]}${planet.Distance} ${resource.decFormatdist[1]} ` }</Text>
            
                   <Text style={styles.listText}> </Text>
            
                 <Text style={styles.listText}>{resource.massInfo[planet.MassType]&&resource.massInfo[planet.MassType]} </Text>
                 <Text style={styles.listText}>{resource.compInfo[planet.Comp]&&resource.compInfo[planet.Comp]} </Text>
         
                 <Text style={styles.listText}> </Text>
                 <Text style={styles.listText}> </Text>
           
                <Text style={styles.listText}>{`${resource.orbit[0]} ${planet.Period} ${resource.orbit[1]} ${resource.decMean[0]} ${planet.MeanDistance} ${resource.decMean[1]}`}</Text>
       
               <Text style={styles.listText}></Text>
               <Text style={styles.listText}>{`${resource.hzd[planet.Hzd]&&resource.hzd[planet.Hzd]} ${resource.hza[planet.Hza]&&resource.hza[planet.Hza]} ${resource.atmosinfo[planet.Atmosphere] &&resource.atmosinfo[planet.Atmosphere]}  ${planet.Moon ? resource.moon:"" }`}</Text>
               <Text style={styles.listText}>{`${planet.DiscYear&&resource.disc} ${planet.DiscYear&&planet.DiscYear} ${resource.discinfo[planet.DiscMethod]&&resource.discinfo[planet.DiscMethod]}`}</Text>
             <Text style={styles.listText}></Text>
               <Text style={styles.listText}></Text>
               <Text style={styles.habTitle}>{resource.esiratings}</Text>
               <RatingBar rating={planet.Esi} />
               <Text style={styles.habTitle}>{resource.sphratings}</Text>
               <RatingBar rating={planet.Sph} />

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
      </ScrollView>
                      </View>
 

    );
  }
}
