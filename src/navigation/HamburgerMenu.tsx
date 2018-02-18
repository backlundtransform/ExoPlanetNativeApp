import * as React  from  'react';

import { Button, Left, Icon,Header  } from 'native-base';



 export default class HamburgerMenu extends React.Component<{navigate}> {
 
  render() {
 
    return (
        <Header>
        <Left>
        <Button transparent onPress={() => {this.props.navigate.navigate('DrawerOpen') }} >
            <Icon name='menu'  />
          </Button>
        </Left>
       
      </Header>

    );
  }
}

