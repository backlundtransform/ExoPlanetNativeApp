import * as React from 'react';
import {AppRegistry, StyleSheet, View,Image } from 'react-native';
import { Container, Header, Title, Content,Thumbnail, List, Button, Left, Right, Body, Icon, Text, ListItem} from 'native-base';
import{resource} from '../config/Resource'
import{Star,PlanetList} from '../service/getPlanets'
import{ConstellationSolarSystems} from '../service/getSolarSystem'
import styles from '../styles/defaultStyle'
import {Gradient} from '../styles/radialgradients'
import Svg,{Circle,G,ClipPath,Path,Rect, Use,Defs,} from 'react-native-svg';
interface SolarSystemProps{navigation:any}
interface  SolarSystemPropsState {starlist:Array<Star> }
export default class  SolarSystem extends React.Component<SolarSystemProps, SolarSystemPropsState> {
  constructor(props) {
    super(props);
 
    this.state = {
        starlist:[]
    }
  
  }

  async componentDidMount (){

    const starlist = await ConstellationSolarSystems(this.props.navigation.state.params.const)

    this.setState({starlist})
  }
 
render() {


    return (
      <Container style={styles.listView}>
        <Content >
          <List dataArray={this.state.starlist}
            renderRow={(item) =>
              <ListItem style={styles.listViewItem} onPress={() => this.props.navigation.navigate('d3view', {star:item})}>
                {item.color!==null?  <Left>
        <Svg
            height="100" 
            width="100" 
       >      { Gradient(item)}
    <G>
     <Circle 
  cx="50" cy="50" r="60" 
 
   fill={`url(#${resource.color[item.color]})`}/></G>
</Svg>
              </Left>:<React.Fragment />}
              <Body>
                <Text style={styles.listTitle}>{item.name}</Text>
            
              </Body>
            </ListItem>
            }>
          </List>
        </Content>
      </Container>

    );
  }
}
