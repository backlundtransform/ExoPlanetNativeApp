import * as React  from  'react';
import styles from '../styles/defaultStyle';
import { ListItem, Text, Icon,Header  } from 'native-base';

 class NavListItems extends React.Component<{title:string, icon:string}> {
 
  render() {
 const {title, icon} = this.props
    return (
        <Text style={styles.navItemDesign}> <Icon name={icon}  style={styles.color} /> {title}</Text> 

    );
  }
}
export default NavListItems
