import  * as React from "react";
import { AppRegistry, StyleSheet, Dimensions, View,ScrollView,ImageBackground,  TouchableHighlight   } from "react-native";
import { Container,Content,} from 'native-base';
import { GameLoop } from "react-native-game-engine";
import styles from '../styles/defaultStyle'
const jovanbase64Icon = 'data:image/jpeg;base64,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';
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
 
export default class Simulator extends React.PureComponent<any,{x:number,y:number, alpha:number}> {
  constructor(props) {
    super(props);

    this.state = {
      x:0,
      y:0,
      alpha:0
    };
  }
 

  updateHandler = ({ touches, screen, time }) => {
    let move = touches.find(x => x.type === "move");


this.setState({
  alpha: this.state.alpha+1/100 

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

   handleResetZoomScale = (event) => {
    console.log(event)
  }
 

    
 
  render() {


    const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
  
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

     <Svg  height="700" width="900"   >
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
 
