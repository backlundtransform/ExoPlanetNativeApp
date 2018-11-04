import * as React from 'react';
import styles from '../styles/defaultStyle';
import {
  Text,
  Icon,
} from 'native-base';
interface NavListItemsProps {
  title: string, icon: string, onPress ? : () => {}
}
interface NavListItemsState {}
class NavListItems extends React.Component < NavListItemsProps, NavListItemsState > {

  render() {
    const {
      title,
      icon,
      onPress
    } = this.props
    return ( <
      Text style = {
        styles.navItemDesign
      }
      onPress = {
        onPress
      } > < Icon name = {
        icon
      }
      style = {
        styles.color
      }
      /> {title}</Text >

    );
  }
}
export default NavListItems