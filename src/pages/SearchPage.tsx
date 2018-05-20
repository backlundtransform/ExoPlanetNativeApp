import * as React from 'react';
import {AppRegistry, StyleSheet, View,Image} from 'react-native';
import {Picker, Container, Header, Title, Content,Thumbnail, List, Button, Left, Right, Body, Text, ListItem} from 'native-base';
import{resource} from '../config/Resource'
import styles from '../styles/defaultStyle'

interface SearchPageProps{navigate:any}
interface SearchPagePropsState {Type:string}
 class SearchPage extends React.Component<SearchPageProps,SearchPagePropsState> {
  constructor(props) {
    super(props);
    this.state = {Type:""}

  }
  onValueChange(value: any) {
    this.state = value
 console.log(this.state)
  
  }
    render() {
   

         return (
           <Container style={styles.listView}>
           <Body>
           <Picker
              mode="dropdown"
            style={{ position: 'absolute', top: 0, width: 300, height: 100 }}
              selectedValue={resource.masssearch[0] }
              onValueChange={()=>this.onValueChange({Type:this})}
              itemStyle={{ backgroundColor: '#818ea5', marginLeft: 0, paddingLeft: 15}}
            >
       {resource.masssearch.map(p=>(<Picker.Item  label={p} key={"mass"+p} value={p}/>))}
        </Picker>
          </Body>
        </Container>
         );
       }
     }
     export default SearchPage