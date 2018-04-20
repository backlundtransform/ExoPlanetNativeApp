import * as React from 'react';
import {AppRegistry, StyleSheet, View,Image } from 'react-native';
import { Container, Header, Title, Content,Thumbnail, List, Button, Icon,Left, Right, Body, Text, ListItem} from 'native-base';
import{resource} from '../config/Resource'
import{PlanetList} from '../service/getPlanets'
import styles from '../styles/defaultStyle'
import {constants} from '../config/constants'

interface HabPlanetsProps{navigation:any}
interface  HabPlanetsPropsState { }
export default class HabPlanets extends React.Component<HabPlanetsProps,HabPlanetsPropsState> {


  render() {
    let key =-1;
 const menu =resource.habmenu as Array<string>
    return (
      <Container style={styles.listView}>
      <Content >
        <List dataArray={resource.habmenu}
          renderRow={(item,index) =>{
            key=key+1;
          return <ListItem style={styles.listViewItem} onPress={() => this.props.navigation.navigate('infopages', {planet:item})}>
         
           <Body>
        
             <Icon style={styles.habicon} name ={constants.habicons[key]}  />
        
             <Text style={styles.habTitle}>{item}</Text>
  
           </Body>
           <Right>
      
           </Right>
         </ListItem>
       
          
          }}/>
 
      </Content>
    </Container>
    );
  }
}

