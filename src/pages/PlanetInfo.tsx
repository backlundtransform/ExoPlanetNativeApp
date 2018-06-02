import * as React from 'react';
import {AppRegistry, StyleSheet, View } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text,Thumbnail,  } from 'native-base';
import{resource} from '../config/Resource'
import{Planet} from '../service/getPlanets'
import styles from '../styles/defaultStyle'
interface PlanetProps{navigation:any}
interface  PlanetPropsState { }
export default class PlanetInfo extends React.Component<PlanetProps, PlanetPropsState> {
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
                <Thumbnail  source={planet.Img}/>
              </Left>
              <Body>
              <Content >
              <Text style={styles.listText}>{`${resource.planetname[0]}  ${planet.Name} ${resource.planetname[1]}  ${planet.Star.Name}  ${resource.planetname[2]} ${resource.const[planet.Star.Constellation-1]}` } {`${resource.decFormatdist[0]}${planet.Distance} ${resource.decFormatdist[1]} ` }</Text>
             
                   </Content>
                   <Text style={styles.listText}> </Text>
                   <Content >
                 <Text style={styles.listText}>{resource.massInfo[planet.Type]} </Text>
                 <Text style={styles.listText}>{resource.compInfo[planet.Comp]} </Text>
                 </Content>
                 <Text style={styles.listText}> </Text>

              </Body>
              <Right>
                <Text style={styles.listText}> {planet.DiscYear}</Text>
              </Right>
           
        </Content>
        </Content>
        
      </Container>

    );
  }
}
