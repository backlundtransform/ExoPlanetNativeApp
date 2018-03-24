import  * as React from "react";
import { AppRegistry, StyleSheet, Dimensions, View,ScrollView,ImageBackground,  TouchableHighlight   } from "react-native";
import { Container,Content,} from 'native-base';
import { GameLoop } from "react-native-game-engine";
import styles from '../styles/defaultStyle'
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
  LinearGradient
} from 'react-native-svg';
import{PlanetList} from '../service/getPlanets'


const RADIUS = 25;
interface SimulatorProps{navigation:any}

interface SimulatorState{x:number,y:number, alpha:number, star:Star}
export default class Simulator extends React.PureComponent<SimulatorProps,SimulatorState> {
  constructor(props) {
    super(props);



    this.state = {
      x:0,
      y:0,
      alpha:0,
      star: SolarSystem(this.props.navigation.state.params.navigation.state.params.planet.Star)
    
    };
  }
 
 updateHandler = ({ touches, screen, time }) => {
    let move = touches.find(x => x.type === "move");

this.setState({
  alpha: this.state.alpha+1/10 

});


    if (move) {
     // move.delta.pageX,
    // move.delta.pageY
   
    }
  };

RotateX=(cx:number,rx:number)=>{

    return  cx + ((rx) * Math.cos(this.state.alpha))
   }

RotateY=(cy:number,ry:number)=>{

    return  cy + ((ry) * Math.sin(this.state.alpha))
   }

 
  render() {

const {star}= this.state
    
    return (
   
      <ScrollView style= {styles.d3View}   horizontal={true}  
      maximumZoomScale={10}
      minimumZoomScale={1}
      zoomScale={2} 
      centerContent
      bouncesZoom={true}
      >
      <GameLoop onUpdate={this.updateHandler}>
 <Content style= {[ { left: this.state.x, top: this.state.y }]} >

     <Svg  height="700" width={ star.Planets[star.Planets.length-1].starDistance*220}  >
     <Image  href={require(
        "../images/sky-night-stars.jpg"
     )}
   
    > </Image>
        <Defs>
		<ClipPath id="clip">
      <Circle  cx={ this.RotateX(200 ,160)} cy={ this.RotateY(150,50)} r="25"
          />
		</ClipPath>
    <RadialGradient id="Hotjovian"
      gradientUnits="objectBoundingBox" fx="30%" fy="30%">
      <Stop offset="0%" stopColor="#FFFFFF" />
      <Stop offset="30%" stopColor="#f6e9e0" />
      <Stop offset="100%" stopColor="#600000" />
    </RadialGradient>
    < RadialGradient id="Star"    cx="70" cy="5" r="115" fx="25" fy="25">
    <Stop offset="10%" stopColor="#ff6a00"/>
        <Stop offset="50%" stopColor="red"/>
        <Stop offset="70%" stopColor="black"/>
    </ RadialGradient>
    < RadialGradient id="Startop"    cx="70" cy="70" r="115" fx="25" fy="25">
    <Stop offset="10%" stopColor="#ff6a00"/>
        <Stop offset="50%" stopColor="red"/>
        <Stop offset="70%" stopColor="black"/>
        
       
    </ RadialGradient>
 	</Defs>
   <Path d="M120,150 a1,1 0 0,0 140,0"    fill="url(#Star)" />
   <Ellipse
        cx="200"
        cy="150"
        rx="160"
        ry="50"
        stroke="white"
        strokeWidth="1"
        fillOpacity="0"
    />

        <Image
      
        x={this.RotateX(150 ,160)} y={ this.RotateY(100,50)}
        width="100"
        height="100"
           href={{uri:jovanbase64Icon}}
      clipPath="url(#clip)"
    />

        <Circle  cx={this.RotateX(200,160)} cy={this.RotateY(150,50)} r="25"
           fillOpacity={0.6}
           fill="url(#Hotjovian)"/>
  
     
  <Path d="M260,150 a1,1 0 0,0 -140,0"    fill="url(#Startop)" />

        </Svg>
     
       
        </Content>
      </GameLoop>  

      </ScrollView>    
    );
  }
}
 
