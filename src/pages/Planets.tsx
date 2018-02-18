import * as React from 'react';
import {AppRegistry, StyleSheet, View } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import{resource} from '../config/Resource'

import  HamburgerMenu from '../navigation/HamburgerMenu'
export default class Planets extends React.Component {

  static navigationOptions =({ navigation, screenProps }) => ( {
    title: resource.planetlist,
    headerLeft:  <HamburgerMenu navigate ={navigation}/>,
  });
  
  render() {
 
    return (
      <Container>
       
        <Content>
          <Text>
          {resource.planetlist}
          </Text>
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>

    );
  }
}

