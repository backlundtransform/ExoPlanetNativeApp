import  * as React from "react";

import styles from '../styles/defaultStyle'
import{resource} from '../config/Resource'

import Svg,{
    Defs,
  Stop,
  RadialGradient,
  LinearGradient
} from 'react-native-svg';
import { Star } from "../service/getPlanets";


export const Gradient =(star:Star)=>(<Defs> <RadialGradient id={"jovian"}
  gradientUnits="objectBoundingBox" fx="30%" fy="30%">
  <Stop offset="0%" stopColor="#FFFFFF" />
  <Stop offset="30%" stopColor="#f6e9e0" />
  <Stop offset="100%" stopColor="#600000" />
</RadialGradient>
<RadialGradient id={"iron"}
  gradientUnits="objectBoundingBox" fx="30%" fy="30%">
  <Stop offset="0%" stopColor="#FFFFFF" />
  <Stop offset="30%" stopColor="#80BD9E" />
  <Stop offset="100%" stopColor="#4C7B95" />
</RadialGradient>
<RadialGradient id={"hotsuperearth"}
  gradientUnits="objectBoundingBox" fx="30%" fy="30%">
  <Stop offset="0%" stopColor="#FFFFFF" />
  <Stop offset="30%" stopColor="#80BD9E" />
  <Stop offset="100%" stopColor="#4C7B95" />
</RadialGradient>
<RadialGradient id={"hotjupiter"}
  gradientUnits="objectBoundingBox" fx="30%" fy="30%">
  <Stop offset="0%" stopColor="#FFFFFF" />
  <Stop offset="30%" stopColor="#f4af0e" />
  <Stop offset="100%" stopColor="#f41d1d" />
</RadialGradient>
<RadialGradient id={"hotstone"}
  gradientUnits="objectBoundingBox" fx="30%" fy="30%">
  <Stop offset="0%" stopColor="#FFFFFF" />
  <Stop offset="30%" stopColor="#80BD9E" />
  <Stop offset="100%" stopColor="#4C7B95" />
</RadialGradient>
<RadialGradient id={"stone"}
  gradientUnits="objectBoundingBox" fx="30%" fy="30%">
  <Stop offset="0%" stopColor="#FFFFFF" />
  <Stop offset="30%" stopColor="#80BD9E" />
  <Stop offset="100%" stopColor="#4C7B95" />
</RadialGradient>
<RadialGradient id={"coldstone"}
  gradientUnits="objectBoundingBox" fx="30%" fy="30%">
  <Stop offset="0%" stopColor="#FFFFFF" />
  <Stop offset="30%" stopColor="#09f751" />
  <Stop offset="100%" stopColor="#4C7B95" />
</RadialGradient>
<RadialGradient id={"neptunian"}
  gradientUnits="objectBoundingBox" fx="30%" fy="30%">
  <Stop offset="0%" stopColor="#FFFFFF" />
  <Stop offset="30%" stopColor="#b7c8ff" />
  <Stop offset="100%" stopColor="#4C7B95" />
</RadialGradient>
<RadialGradient id={"superearth"}
  gradientUnits="objectBoundingBox" fx="30%" fy="30%">
  <Stop offset="0%" stopColor="#FFFFFF" />
  <Stop offset="30%" stopColor="#09f751" />
  <Stop offset="100%" stopColor="#4C7B95" />
</RadialGradient>< RadialGradient id={`Star-${resource.red}`}   cx="70" cy="5" r={ star.radius*2} fx="25" fy="25">
<Stop offset="10%" stopColor="#ff6a00"/>
 <Stop offset="50%" stopColor="red"/>
 <Stop offset="70%" stopColor="black"/>
</ RadialGradient>
< RadialGradient id={`Startop-${resource.color[3]}`}   cx="70" cy="70" r={ star.radius*2} fx="25" fy="25">
 <Stop offset="10%" stopColor="#ff6a00"/>
 <Stop offset="50%" stopColor="red"/>
 <Stop offset="70%" stopColor="black"/>   
</ RadialGradient>
< RadialGradient id={`Star-${resource.color[3]}`}   cx="70" cy="5" r={ star.radius*2} fx="25" fy="25">
<Stop offset="10%" stopColor="#ff6a00"/>
 <Stop offset="50%" stopColor="orange"/>
 <Stop offset="70%" stopColor="black"/>
</ RadialGradient>
< RadialGradient id={`Startop-${resource.color[2]}`}   cx="70" cy="70" r={ star.radius*2} fx="25" fy="25">
 <Stop offset="10%" stopColor="#ff6a00"/>
 <Stop offset="50%" stopColor="orange"/>
 <Stop offset="70%" stopColor="black"/>   
</ RadialGradient>< RadialGradient id={`${resource.color[3]}`} gradientUnits="objectBoundingBox" fx="30%" fy="30%">
 <Stop offset="10%" stopColor="#ff6a00"/>
 <Stop offset="50%" stopColor="red"/>
 <Stop offset="80%" stopColor="#50607a"/>   
</ RadialGradient>
< RadialGradient id={`${resource.color[2]}`}    gradientUnits="objectBoundingBox" fx="30%" fy="30%">
<Stop offset="10%" stopColor="#ff6a00"/>
 <Stop offset="50%" stopColor="orange"/>
 <Stop offset="80%" stopColor="#50607a"/>
</ RadialGradient>
< RadialGradient id={`${resource.color[1]}`}    gradientUnits="objectBoundingBox" fx="30%" fy="30%">
<Stop offset="10%" stopColor="#b7c8ff"/>
 <Stop offset="50%" stopColor="white"/>
 <Stop offset="80%" stopColor="#50607a"/>
</ RadialGradient>
< RadialGradient id={`${resource.color[0]}`}    gradientUnits="objectBoundingBox" fx="30%" fy="30%">
<Stop offset="10%" stopColor="#164dff"/>
 <Stop offset="50%" stopColor="blue"/>
 <Stop offset="80%" stopColor="#50607a"/>
</ RadialGradient>
 	</Defs>)
    

