import * as React from 'react';
import {AppRegistry, StyleSheet, View,ScrollView  } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text,Thumbnail, } from 'native-base';
import{resource} from '../config/Resource'
import{Planet,storeBase64} from '../service/getPlanets'
import styles from '../styles/defaultStyle'
import {Gradient} from '../styles/radialgradients'
import RatingBar from '../components/RatingBar'
import Svg,{Circle,G,ClipPath,Path,Image,Rect, Use,Defs,

} from 'react-native-svg';
interface PlanetProps{navigation:any, color:any}
interface  PlanetPropsState { color:any}
export default class PlanetInfo extends React.Component<PlanetProps, PlanetPropsState> {
    constructor(props) {
        super(props);
     
      }

    
  render() {
    const {planet, color}= this.props.navigation.state.params

  

    return (
      <View style={{ flex:1}}>
      <ScrollView  style={styles.infoMainContent}>   
        <Svg
            height="300" 
            width="300" 
       >      { Gradient(planet.star)}
    <G>
    <Defs>
        <ClipPath id="clip">
            <Circle cx="150" cy="130" r="100"  />
        </ClipPath>
    </Defs>

    <Image
     width="300" height="250" 
        href={{uri:  color}} 
        clipPath="url(#clip)"
    />
    <Circle 
  cx="150" cy="130" r="100" 
   fillOpacity={0.4}
   fill={`url(#${planet.img.uri})`}/></G>
</Svg>
<Text style={styles.listText}></Text>
              <Text style={styles.listText}>{`${resource.planetname[0]} ${planet.name} ${resource.planetname[1]}  ${planet.star.name}  ${resource.planetname[2]} ${resource.const[planet.star.constellation-1]===undefined?"":resource.const[planet.star.constellation-1]}` } {`${resource.decFormatdist[0]}${planet.distance!==0?Math.round(planet.distance):""} ${resource.decFormatdist[1]} ` }</Text>
            
                   <Text style={styles.listText}> </Text>
            
                 <Text style={styles.listText}>{resource.massInfo[planet.massType]===undefined?"":resource.massInfo[planet.massType]} </Text>
                 <Text style={styles.listText}>{resource.compInfo[planet.comp]===undefined?"":resource.compInfo[planet.comp]} </Text>
         
                 <Text style={styles.listText}> </Text>
                 <Text style={styles.listText}> </Text>
           
                <Text style={styles.listText}>{`${resource.orbit[0]} ${planet.period} ${resource.orbit[1]} ${resource.decMean[0]} ${planet.meanDistance} ${resource.decMean[1]}`}</Text>
       
               <Text style={styles.listText}></Text>
               <Text style={styles.listText}>{`${resource.hzd[planet.hzd]===undefined?"":resource.hzd[planet.hzd]+" "}${resource.hza[planet.hza]===undefined?"":resource.hza[planet.hza]+" "}${resource.atmosinfo[planet.atmosphere] ===undefined?"":resource.atmosinfo[planet.atmosphere]+" "}${planet.moon ? resource.moon:"" }`}</Text>
               <Text style={styles.listText}>{`${planet.discYear===undefined?"":resource.disc} ${planet.discYear===undefined?"":planet.discYear}.`}</Text>
               <Text style={styles.listText}>{`${resource.discinfo[planet.discMethod]===undefined?"":resource.discinfo[planet.discMethod]}`}</Text>
             <Text style={styles.listText}></Text>
               <Text style={styles.listText}></Text>
               <Text style={styles.habTitle}>{resource.esiratings}</Text>
               <RatingBar rating={planet.esi} />
               <Text style={styles.habTitle}>{resource.sphratings}</Text>
               <RatingBar rating={planet.sph} />

   <Text style={styles.listText}></Text>
               <Text style={styles.listText}></Text><View style={styles.infocontainer}>
               <View style={styles.infotext} >{planet.mass==null?<React.Fragment />:<Text style={styles.listText}>{`${resource.planetinfo[0]}`}</Text>}</View>
                <View style={styles.infotext} >{planet.mass==null?<React.Fragment />:<Text style={styles.listText}>{`${planet.mass}*${resource.earth }`}</Text>}</View>
              </View><View style={styles.infocontainer}>
                <View style={styles.infotext} >{planet.radius==null?<React.Fragment />:<Text style={styles.listText}>{`${resource.planetinfo[1]}`}</Text>}</View>
                <View style={styles.infotext} >{planet.radius==null?<React.Fragment />:<Text style={styles.listText}>{`${planet.radius}*${resource.earth }`}</Text>}</View>
              </View><View style={styles.infocontainer}>
                <View style={styles.infotext} >{planet.density==null?<React.Fragment />:<Text style={styles.listText}>{`${resource.planetinfo[2]}`}</Text>}</View>
                <View style={styles.infotext} >{planet.density==null?<React.Fragment />:<Text style={styles.listText}>{`${planet.density}*${resource.earth }`}</Text>}</View>
              </View><View style={styles.infocontainer}>
                <View style={styles.infotext} >{planet.gravity==null?<React.Fragment />:<Text style={styles.listText}>{`${resource.planetinfo[3]}`}</Text>}</View>
                <View style={styles.infotext} >{planet.gravity==null?<React.Fragment />:<Text style={styles.listText}>{`${planet.gravity}*${resource.earth }`}</Text>}</View>
              </View><View style={styles.infocontainer}>
                <View style={styles.infotext} >{planet.surfacePressure==null?<React.Fragment />:<Text style={styles.listText}>{`${resource.planetinfo[4]}`}</Text>}</View>
                <View style={styles.infotext} >{planet.surfacePressure==null?<React.Fragment />:<Text style={styles.listText}>{`${planet.surfacePressure}*${resource.earth }`}</Text>}</View>
              </View><View style={styles.infocontainer}>
                <View style={styles.infotext} >{planet.escapeVelocity==null?<React.Fragment />:<Text style={styles.listText}>{`${resource.planetinfo[5]}`}</Text>}</View>
                <View style={styles.infotext} >{planet.escapeVelocity==null?<React.Fragment />:<Text style={styles.listText}>{`${planet.escapeVelocity}*${resource.earth }`}</Text>}</View>
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
