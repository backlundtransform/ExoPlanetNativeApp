import  * as React from "react";
import { AppRegistry, StyleSheet, Dimensions, View,ScrollView,ImageBackground,  TouchableHighlight   } from "react-native";
import { Container,Content,} from 'native-base';
import { GameLoop } from "react-native-game-engine";
import styles from '../styles/defaultStyle'
import {Gradient} from '../styles/radialgradients'
import{resource} from '../config/Resource'
import{Planet, Star, terranbase64Icon,jovanbase64Icon,  redIcon,  orangeIcon} from '../service/getPlanets'
import{SolarSystem} from '../service/getSolarSystem'
import Svg,{Circle,Ellipse,Pattern,Path, Image,ClipPath, Symbol,Text, Use,Defs,Stop,RadialGradient,LinearGradient,G} from 'react-native-svg';
import{PlanetList} from '../service/getPlanets'
import SvgPanZoom, { SvgPanZoomElement } from 'react-native-svg-pan-zoom';

const RADIUS = 25;
interface SimulatorProps{navigation:any}

interface SimulatorState{x:number,y:number, alpha:number, star:Star}
export default class Simulator extends React.PureComponent<SimulatorProps,SimulatorState> {
  constructor(props) {
    super(props);

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

this.props.navigation.navigate('infopages', {planet:PlanetList.find(p=>p.name==planet.Name)})
   }
  render() {

const {star}= this.state
let {height} = Dimensions.get('window');


let width =star.planets[star.planets.length-1].starDistance*2

width =(width>star.habZoneMax*2?width:star.habZoneMax*2)+star.planets[star.planets.length-1].radius*2
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

 
      
   <Path   d={`M${width/2-star.radius},${height/2} a1,1 0 0,0 ${star.radius*2},0`}   fill={`url(#Star-${star.type})`} />

   <Ellipse
cx={width/2}
cy={height/2}
rx={star.habZoneMax}
ry={star.habZoneMax * 0.3}
stroke="blue"
strokeWidth="1"
fillOpacity="0"
/>

   <Ellipse
cx={width/2}
cy={height/2}
rx={star.habZoneMin}
ry={star.habZoneMin * 0.3}
stroke="red"
strokeWidth="1"
fillOpacity="0"
/>

  {star.planets.map((p,index)=>{ return (<G key={index} >
    <ClipPath  key={`path- ${index}`}
      id={p.name}>
      <Circle cx={ this.RotateX(width/2 ,p.starDistance)} cy={ this.RotateY(height/2,p.starDistance * 0.3)} r={p.radius}
       />
		</ClipPath>
<Image 
    key={`image- ${index}`}
    x={ this.RotateX(width/2-50 ,p.starDistance)} y={ this.RotateY(height/2-50,p.starDistance * 0.3)} 
    width="100"
    height="100"
    href={p.img}
    clipPath={`url(#${p.name})`} 
/>
<Text
        key={`text- ${index}`}
        x={2*p.radius+this.RotateX(width/2,p.starDistance)}
        y={2*p.radius+this.RotateY(height/2,p.starDistance * 0.3)}
        textAnchor="middle"
        fontWeight="bold"
        fontSize="16"
        fill="white"
    >{p.name}</Text>
  <Circle  key={`circle-${index}`}   
   cx={this.RotateX(width/2,p.starDistance)} 
   cy={this.RotateY(height/2,p.starDistance * 0.3)}
   r={p.radius}
   onPressIn={() => this.navigateToPlanet(p)}
   fillOpacity={0.6}
   fill={`url(#${p.type})`}/>
  
</G>
  )})}

  <Path    d={`M${width/2+star.radius},${height/2} a1,1 0 0,0  ${star.radius*-2},0`}   fill={`url(#Startop-${star.type})`}/>
  </SvgPanZoomElement>
        </SvgPanZoom>
        </Content>
      </GameLoop>  

      </ScrollView>    
    );
  }
}
 
