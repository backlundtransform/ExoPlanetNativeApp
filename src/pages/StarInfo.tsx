import * as React from 'react';
import {AppRegistry, StyleSheet, View } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text,Thumbnail } from 'native-base';
import{resource} from '../config/Resource'
import styles from '../styles/defaultStyle'
import {Gradient} from '../styles/radialgradients'
import Svg,{Circle,G,ClipPath,Path,Image,Rect, Use,Defs,} from 'react-native-svg';
interface StarProps{navigation:any}
interface  StarPropsState { }
export default class StarInfo extends React.Component<StarProps, StarPropsState> {
    constructor(props) {
        super(props);

      }
    
  render() {
    const {planet}= this.props.navigation.state.params


    return (
      <Container  style={styles.darkcontainer}>
       
        <Content  style={styles.infoContent}>
        <Content >
         
              
             <Left>
             <Svg
            height="300" 
            width="300" 
       >      { Gradient(planet.Star)}
    <G>
    
    <Circle 
  cx="150" cy="130" r="120" 
 
   fill={`url(#${planet.Star.Type})`}/></G>
</Svg>
              </Left>
              <Body>
                <Text style={styles.listTitle}>{planet.Star.Name}</Text>
                <Text style={styles.listText}>{`${planet.Star.Type}`} </Text>
              </Body>
              <Right>
              
              </Right>
           
        </Content>
        </Content>
        
      </Container>

    );
  }
}