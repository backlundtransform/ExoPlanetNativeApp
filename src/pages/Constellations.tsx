import * as React from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import{resource} from '../config/Resource'
import  HamburgerMenu from '../navigation/HamburgerMenu'
export default class Constellations extends React.Component {


  render() {
 
    return (
      <Container>
     <Content>
          <Text>
          {resource.con}
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