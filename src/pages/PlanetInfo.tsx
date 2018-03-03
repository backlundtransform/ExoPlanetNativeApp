import * as React from 'react';
import {AppRegistry, StyleSheet, View } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import{resource} from '../config/Resource'

export default class PlanetInfo extends React.Component {


  render() {
 
    return (
      <Container>
       
        <Content>
          <Text>
          {resource.PlanetInfo}
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
