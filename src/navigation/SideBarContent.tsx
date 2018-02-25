import  * as React from "react";
import { AppRegistry, Image, StatusBar } from "react-native";
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import {DrawerItems } from 'react-navigation';
import styles from '../styles/defaultStyle';
import  HamburgerMenu from './HamburgerMenu'
import { DrawerNavigator } from 'react-navigation';


class SideBarContent extends React.Component {

  render() {
 
    return (

      <Container style={styles.container}>
   
        <Content >
          <Image
            source={require(
               "../images/kepler.jpg"
            )}
            style={ styles.sidebarImage}/>
           <DrawerItems
                  {...this.props}
             
                  />
        </Content>
          
    </Container>
    );
  }
}
export default SideBarContent