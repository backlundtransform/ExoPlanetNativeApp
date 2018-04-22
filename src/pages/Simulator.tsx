import  * as React from "react";
import { AppRegistry, StyleSheet, Dimensions, View,ScrollView,ImageBackground,  TouchableHighlight   } from "react-native";
import { Container,Content,} from 'native-base';
import { GameLoop } from "react-native-game-engine";
import styles from '../styles/defaultStyle'
import {Gradient} from '../styles/radialgradients'


import{resource} from '../config/Resource'
import{Planet, Star, terranbase64Icon,jovanbase64Icon,  redIcon,  orangeIcon} from '../service/getPlanets'
import{SolarSystem} from '../service/getSolarSystem'

import Svg,{
  Circle,
  Ellipse,
  Pattern,
  Path,
  Image,
  ClipPath,
  Symbol,
  Text,
  Use,
  Defs,
  Stop,
  RadialGradient,
  LinearGradient,G
} from 'react-native-svg';
import{PlanetList} from '../service/getPlanets'
import SvgPanZoom, { SvgPanZoomElement } from 'react-native-svg-pan-zoom';

const RADIUS = 25;
interface SimulatorProps{navigation:any}

interface SimulatorState{x:number,y:number, alpha:number, star:Star}
export default class Simulator extends React.PureComponent<SimulatorProps,SimulatorState> {
  constructor(props) {
    super(props);
   console.log(this.props.navigation.state.params.Star) 
const  prop= this.props.navigation.state.params.Star?this.props.navigation.state.params:this.props.navigation.state.params.navigation
    this.state = {
      x:0,
      y:0,
      alpha:0,
      star: SolarSystem(prop.Star?prop.Star: prop.state.params.planet.Star)
    
    };
  }
 
 updateHandler = ({ touches, screen, time }) => {
    let move = touches.find(x => x.type === "move");

this.setState({
  alpha: this.state.alpha+1/50 

});


    if (move) {
     // move.delta.pageX,
    // move.delta.pageY
   
    }
  };

RotateX=(cx:number,rx:number)=>{

    return  cx + ((rx) * Math.cos(this.state.alpha+rx))
   }

RotateY=(cy:number,ry:number)=>{

    return  cy + ((ry) * Math.sin(this.state.alpha+ry/0.3))
   }

navigateToPlanet=(planet:any)=>{

this.props.navigation.navigate('infopages', {planet:PlanetList.find(p=>p.Name==planet.Name)})
   }
  render() {

const {star}= this.state
let {height} = Dimensions.get('window');


let width =star.Planets[star.Planets.length-1].starDistance*2

width =(width>star.HabZoneMax*2?width:star.HabZoneMax*2)+star.Planets[star.Planets.length-1].Radius*2
 height =height > width*0.3?height: width*0.3
    return (
   
      <ScrollView style= {styles.d3View}   horizontal={true}  
     
      >
      <GameLoop onUpdate={this.updateHandler}>
 <Content  style= {[ { left: this.state.x, top: this.state.y }]} >

        <SvgPanZoom
          canvasHeight  = {height}
          canvasWidth   = {width}
          minScale      = {0.5}
          initialZoom   = {1}
          maxScale ={2}
     
     
        >
  <SvgPanZoomElement
   x  = {0}
    y  = {0}

  
  
  >
     <Image  href={require(
        "../images/sky-night-stars.jpg"
     )}
   
    > </Image>
        { Gradient(star)}

 
      
   <Path   d={`M${width/2-star.Radius},${height/2} a1,1 0 0,0 ${star.Radius*2},0`}   fill={`url(#Star-${star.Type})`} />

   <Ellipse
cx={width/2}
cy={height/2}
rx={star.HabZoneMax}
ry={star.HabZoneMax * 0.3}
stroke="blue"
strokeWidth="1"
fillOpacity="0"
/>

   <Ellipse
cx={width/2}
cy={height/2}
rx={star.HabZoneMin}
ry={star.HabZoneMin * 0.3}
stroke="red"
strokeWidth="1"
fillOpacity="0"
/>

  {star.Planets.map((p,index)=>{ return (<G key={index} >
    <ClipPath  key={`path- ${index}`}
      id={p.Name}>
      <Circle cx={ this.RotateX(width/2 ,p.starDistance)} cy={ this.RotateY(height/2,p.starDistance * 0.3)} r={p.Radius}
       />
		</ClipPath>
<Image 
    key={`image- ${index}`}
    x={ this.RotateX(width/2-50 ,p.starDistance)} y={ this.RotateY(height/2-50,p.starDistance * 0.3)} 
    width="100"
    height="100"
    href={p.Img}
    clipPath={`url(#${p.Name})`} 
/>
<Text
        key={`text- ${index}`}
        x={2*p.Radius+this.RotateX(width/2,p.starDistance)}
        y={2*p.Radius+this.RotateY(height/2,p.starDistance * 0.3)}
        textAnchor="middle"
        fontWeight="bold"
        fontSize="16"
        fill="white"
    >{p.Name}</Text>
  <Circle  key={`circle-${index}`}   
   cx={this.RotateX(width/2,p.starDistance)} 
   cy={this.RotateY(height/2,p.starDistance * 0.3)}
   r={p.Radius}
   onPressIn={() => this.navigateToPlanet(p)}
   fillOpacity={0.6}
   fill={`url(#${p.Type})`}/>
  
</G>
  )})}

  <Path    d={`M${width/2+star.Radius},${height/2} a1,1 0 0,0  ${star.Radius*-2},0`}   fill={`url(#Startop-${star.Type})`}/>
  </SvgPanZoomElement>
        </SvgPanZoom>
        </Content>
      </GameLoop>  

      </ScrollView>    
    );
  }
}
 
