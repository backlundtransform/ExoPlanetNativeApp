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


export const Gradient =(star:Star)=>(<Defs> <RadialGradient id={resource.hotJovian}
  gradientUnits="objectBoundingBox" fx="30%" fy="30%">
  <Stop offset="0%" stopColor="#FFFFFF" />
  <Stop offset="30%" stopColor="#f6e9e0" />
  <Stop offset="100%" stopColor="#600000" />
</RadialGradient>


<RadialGradient id={resource.superEarth}
  gradientUnits="objectBoundingBox" fx="30%" fy="30%">
  <Stop offset="0%" stopColor="#FFFFFF" />
  <Stop offset="30%" stopColor="#80BD9E" />
  <Stop offset="100%" stopColor="#4C7B95" />
</RadialGradient>< RadialGradient id={`Star-${resource.red}`}   cx="70" cy="5" r={ star.Radius*2} fx="25" fy="25">
<Stop offset="10%" stopColor="#ff6a00"/>
 <Stop offset="50%" stopColor="red"/>
 <Stop offset="70%" stopColor="black"/>
</ RadialGradient>
< RadialGradient id={`Startop-${resource.red}`}   cx="70" cy="70" r={ star.Radius*2} fx="25" fy="25">
 <Stop offset="10%" stopColor="#ff6a00"/>
 <Stop offset="50%" stopColor="red"/>
 <Stop offset="70%" stopColor="black"/>   
</ RadialGradient>
< RadialGradient id={`Star-${resource.orange}`}   cx="70" cy="5" r={ star.Radius*2} fx="25" fy="25">
<Stop offset="10%" stopColor="#ff6a00"/>
 <Stop offset="50%" stopColor="orange"/>
 <Stop offset="70%" stopColor="black"/>
</ RadialGradient>
< RadialGradient id={`Startop-${resource.orange}`}   cx="70" cy="70" r={ star.Radius*2} fx="25" fy="25">
 <Stop offset="10%" stopColor="#ff6a00"/>
 <Stop offset="50%" stopColor="orange"/>
 <Stop offset="70%" stopColor="black"/>   
</ RadialGradient>
 	</Defs>)
    

