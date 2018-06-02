import * as React from 'react';
import {AppRegistry, StyleSheet, View } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text,Thumbnail  } from 'native-base';
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
                <Text style={styles.listTitle}>{planet.Name}</Text>
                <Text style={styles.listText}>{`${planet.Type}, ${planet.Distance} ${resource.from}`} </Text>

                 <Text style={styles.listText}>{resource.massInfo[planet.Type]} </Text>
                 <Text style={styles.listText}>{resource.compInfo[planet.Comp]} </Text>
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
