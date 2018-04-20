import * as React from 'react';
import {AppRegistry, StyleSheet, View,Image} from 'react-native';
import { Container, Header, Title, Content,Thumbnail, List, Button, Left, Right, Body, Text, ListItem} from 'native-base';
import{resource} from '../config/Resource'
import{PlanetList} from '../service/getPlanets'
import styles from '../styles/defaultStyle'
import {constants} from '../config/constants'
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import Svg,{
  Circle,
  Ellipse,
  Pattern,
  Path,


} from 'react-native-svg';
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
         
           <Body style={styles.habbody} >

           { key==0?  <Svg  width={30}   height={30} viewBox="0 0 24 24">
           <Path fill="#c6d4ff" d="M12,3C16.97,3 21,6.58 21,11C21,15.42 15,21 12,21C9,21 3,15.42 3,11C3,6.58 7.03,3 12,3M10.31,10.93C9.29,9.29 7.47,8.58 6.25,9.34C5.03,10.1 4.87,12.05 5.89,13.69C6.92,15.33 8.74,16.04 9.96,15.28C11.18,14.5 11.33,12.57 10.31,10.93M13.69,10.93C12.67,12.57 12.82,14.5 14.04,15.28C15.26,16.04 17.08,15.33 18.11,13.69C19.13,12.05 18.97,10.1 17.75,9.34C16.53,8.58 14.71,9.29 13.69,10.93M12,17.75C10,17.75 9.5,17 9.5,17C9.5,17.03 10,19 12,19C14,19 14.5,17 14.5,17C14.5,17 14,17.75 12,17.75Z" />
            </Svg>:<Icon style={styles.habicon} name ={constants.habicons[key]}  />} 
             <Text  style={styles.habTitle} >  {item}</Text>
  
           </Body>
         
         </ListItem>
       
          
          }}/>
 
      </Content>
    </Container>
    );
  }
}

