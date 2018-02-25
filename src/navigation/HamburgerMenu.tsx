import * as React  from  'react';

import {  Button, Left, Icon,Header  } from 'native-base';
import styles from '../styles/defaultStyle';

 export default class HamburgerMenu extends React.Component<{navigate:any}> {

 HandleClick=()=>{
   
  this.props.navigate.navigate("DrawerToggle") 
 
  }
  render() {
    
    return (

        <Header style={styles.header}>
        <Left >
        <Button transparent onPress={() => this.HandleClick()} >
            <Icon name={"menu"}  />
          </Button>
        </Left>
      </Header>
     
    );
  }
}

