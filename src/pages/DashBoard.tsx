import * as React from 'react';
import {AppRegistry, StyleSheet, View,Image} from 'react-native';
import { Container, Header, Title, Content,Thumbnail, List, Button, Left, Right, Body, Text, ListItem} from 'native-base';
import{resource} from '../config/Resource'
import styles from '../styles/defaultStyle'

interface DashBoardProps{}
interface DashBoardPropsState { }
 class DashBoard extends React.Component<DashBoardProps,DashBoardPropsState> {

    render() {


         return (
           <Container style={styles.listView}>
           <Body>
             <Text style={styles.listTitle}>{resource.dashboard}</Text>
          </Body>
        </Container>
         );
       }
     }
     
     export default DashBoard