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
  alpha: this.state.alpha+1/50 

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
let {height} = Dimensions.get('window');


let width =star.Planets[star.Planets.length-1].starDistance*2

width =(width>star.HabZoneMax*2?width:star.HabZoneMax*2)+star.Planets[star.Planets.length-1].Radius*2
 height =height > width*0.3?height: width*0.3
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

     <Svg  height={height} width={width}  >
     <Image  href={require(
        "../images/sky-night-stars.jpg"
     )}
   
    > </Image>
        { Gradient(star)}
      
   <Path  d={`M${width/2-star.Radius},${height/2} a1,1 0 0,0 ${star.Radius*2},0`}   fill={`url(#Star-${star.Type})`} />

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

  {star.Planets.map((p,index)=>{ return (<React.Fragment key={index}><Ellipse  key={index}
cx={width/2}
cy={height/2}
rx={p.starDistance}
ry={p.starDistance * 0.3}
stroke="white"
strokeWidth="1"
fillOpacity="0"
/>
<ClipPath  key={index}
  id={p.Name}>
      <Circle  cx={ this.RotateX(width/2 ,p.starDistance)} cy={ this.RotateY(height/2,p.starDistance * 0.3)} r={p.Radius}
          />
		</ClipPath>
<Image 
 key={index}
x={ this.RotateX(width/2-50 ,p.starDistance)} y={ this.RotateY(height/2-50,p.starDistance * 0.3)} 
width="100"
height="100"
   href={p.Img}
clipPath={`url(#${p.Name})`} 
/>

<Circle  key={index}   cx={this.RotateX(width/2,p.starDistance)} cy={this.RotateY(height/2,p.starDistance * 0.3)} r={p.Radius}
   fillOpacity={0.6}
   fill={`url(#${p.Type})`}/>
</React.Fragment>
  )})}
  
  
  
     
  <Path  d={`M${width/2+star.Radius},${height/2} a1,1 0 0,0  ${star.Radius*-2},0`}   fill={`url(#Startop-${star.Type})`}/>

        </Svg>
     
       
        </Content>
      </GameLoop>  

      </ScrollView>    
    );
  }
}
 
