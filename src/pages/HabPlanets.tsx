import * as React from 'react';
import {AppRegistry, StyleSheet, View,Image} from 'react-native';
import { Container, Header, Title, Content,Thumbnail, List, Button, Left, Right, Body, Text, ListItem} from 'native-base';
import{resource} from '../config/Resource'
import{PlanetList, filter} from '../service/getPlanets'
import styles from '../styles/defaultStyle'
import {constants} from '../config/constants'

interface HabPlanetsProps{navigation:any}
interface  HabPlanetsPropsState { }

export default class HabPlanets extends React.Component<HabPlanetsProps,HabPlanetsPropsState> {

  render() {
 
    return (
      <Container style={styles.listView}>
      <Content >
        <List dataArray={constants.habmenu}
          renderRow={(item,index) =>{
       
          return <ListItem style={styles.listViewItem} onPress={() => {
        
            this.props.navigation.navigate('planetlist', item.filter )}}>
         
           <Body style={styles.habbody} >

          {item.icon}
             <Text  style={styles.habTitle} >  {item.name}</Text>
  
           </Body>
         
         </ListItem>
      
          }}/>
 
      </Content>
    </Container>
    );
  }
}

