import * as React from 'react';
import {AppRegistry, StyleSheet, View,Image} from 'react-native';
import { Container, Header, Title, Content,Thumbnail, List, Button, Left, Right, Body, Text, ListItem} from 'native-base';
import{resource} from '../config/Resource'
import{PlanetList, filter} from '../service/getPlanets'
import styles from '../styles/defaultStyle'
import {constants} from '../config/constants'
interface ConstellationsProps{navigation:any}
interface  ConstellationsPropsState { }
export default class Constellations extends React.Component<ConstellationsProps,ConstellationsPropsState> {

    render() {
      console.log(this.props.navigation)

         return (
           <Container style={styles.listView}>
           <Content >
             <List dataArray={constants.constellations}
               renderRow={(item,index) =>{
            
               return <ListItem style={styles.listViewItem} onPress={() => {
        this.props.navigation.navigate('solarlist',{const:item.id})}}>
              
             <Left>
               {item.icon}

           </Left>
           <Body>
             <Text style={styles.listTitle}>{item.name}</Text>
         
           </Body>
         </ListItem>
               
               }}/>
      
           </Content>
         </Container>
         );
       }
     }
     
