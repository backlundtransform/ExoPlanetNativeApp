import  * as React from "react";

import{filter } from '../service/getPlanets'

import styles from '../styles/defaultStyle';

import { Container, Header, Title, Content, Button, Left, Icon, Text, ListItem,Item,Input } from 'native-base';
import{resource} from '../config/Resource'
interface Searchprop{search:any}
class Search extends React.Component<Searchprop,any> {
  constructor(props) {
    super(props);
   
  }
  render() {
 
    return (<Header  style={styles.headercontent} searchBar rounded>
        <Item>
          <Icon name="ios-search" />
          <Input placeholder={resource.search}  onChange={(value)=>this.props.search(value.nativeEvent.text)}/>
        </Item>
        <Button transparent>
          <Text>{resource.search}</Text>
        </Button>
      </Header>
    );
  }
}
export default  Search