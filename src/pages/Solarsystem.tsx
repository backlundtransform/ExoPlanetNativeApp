import * as React from 'react';
import {AppRegistry, StyleSheet, View,Image } from 'react-native';
import { Container, Header, Title, Content,Thumbnail, List, Button, Left, Right, Body, Icon, Text, ListItem} from 'native-base';
import{resource} from '../config/Resource'
import{Star,PlanetList} from '../service/getPlanets'
import{ConstellationSolarSystems} from '../service/getSolarSystem'
import styles from '../styles/defaultStyle'

interface SolarSystemProps{navigation:any}
interface  SolarSystemPropsState {starlist:Array<Star> }
export default class  SolarSystem extends React.Component<SolarSystemProps, SolarSystemPropsState> {
  constructor(props) {
    super(props);
 
    this.state = {
        starlist:ConstellationSolarSystems(props.navigation.state.params.const)
    }
  
  }
 
render() {


    return (
      <Container style={styles.listView}>
        <Content >
          <List dataArray={this.state.starlist}
            renderRow={(item) =>
              <ListItem style={styles.listViewItem} onPress={() => this.props.navigation.navigate('d3view', {Star:item})}>
             <Left>
                <Thumbnail  source={item.Img}
          />
              </Left>
              <Body>
                <Text style={styles.listTitle}>{item.Name}</Text>
            
              </Body>
            </ListItem>
            }>
          </List>
        </Content>
      </Container>

    );
  }
}
