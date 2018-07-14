import * as React from 'react';
import {AppRegistry, StyleSheet, View,Image} from 'react-native';
import { Container, Header, Title, Content,Thumbnail, List, Button, Left, Right, Body, Text, ListItem} from 'native-base';
import{resource} from '../config/Resource'
import styles from '../styles/defaultStyle'
import {PlanetList} from '../service/getPlanets'

interface DashBoardProps{}
interface DashBoardPropsState { }
 class DashBoard extends React.Component<DashBoardProps,DashBoardPropsState> {

    render() {


         return (
           <Container style={styles.listView}>
           <Body>
             <Text style={styles.stattitle}>{resource.foundplanets}</Text><Text style={styles.statnum}>{PlanetList.length}</Text>
             <Text style={styles.stattitle}>{resource.foundhabitableplanets}</Text><Text style={styles.statnum}>{PlanetList.filter(p=>p.Hab===true).length}</Text>
          </Body>
        </Container>
         );
       }
     }
     
     export default DashBoard