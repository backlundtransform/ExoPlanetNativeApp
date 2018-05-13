import * as React from 'react';
import {AppRegistry, StyleSheet, View,Image} from 'react-native';
import { Container, Header, Title, Content,Thumbnail, List, Button, Left, Right, Body, Text, ListItem} from 'native-base';
import{resource} from '../config/Resource'
import styles from '../styles/defaultStyle'

interface SearchPageProps{}
interface SearchPagePropsState { }
 class SearchPage extends React.Component<SearchPageProps,SearchPagePropsState> {

    render() {
   

         return (
           <Container style={styles.listView}>
           <Body>
             <Text style={styles.listTitle}>{resource.search}</Text>
          </Body>
        </Container>
         );
       }
     }
     export default SearchPage