import  * as React from "react";
import {  Image,  } from "react-native";
import { Container,  Content } from 'native-base';
import {DrawerItems } from 'react-navigation';
import styles from '../styles/defaultStyle';

class SideBarContent extends React.Component {

  render() {
 
    return (<Container style={styles.container}>
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