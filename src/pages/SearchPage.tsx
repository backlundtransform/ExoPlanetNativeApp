import * as React from 'react';
import {AppRegistry, StyleSheet, View,Image} from 'react-native';
import {Picker, Container, Header, Title, Content,Thumbnail, List, Button, Left, Right, Body, Text, ListItem} from 'native-base';
import{resource} from '../config/Resource'
import styles from '../styles/defaultStyle'

interface SearchPageProps{navigate:any}
interface SearchPagePropsState {Type:string, Comp:string}
 class SearchPage extends React.Component<SearchPageProps,SearchPagePropsState> {
  constructor(props) {
    super(props);
    this.state = {Type:resource.masssearch[0],  Comp:resource.compsearch[0]}

  }
  onMassValueChange(value: string) {
    this.setState({Type:value})
  
  }

onCompChange(value: string) {
  this.setState({Comp:value})

}
    render() {
   
      const {Type,Comp}=this.state
         return (
           <Container style={styles.listView}>
           <Body>
           <Picker
              mode="dropdown"
              style={{ position: 'absolute', top: 0, width: 300, height: 100 }}
              selectedValue={Type}
              onValueChange={this.onMassValueChange.bind(this)}
              itemStyle={{ backgroundColor: '#818ea5', marginLeft: 0, paddingLeft: 15}}
            >
       {resource.masssearch.map(p=>(<Picker.Item  label={p} key={"mass"+p} value={p}/>))}
        </Picker>
        <Picker
              mode="dropdown"
            style={{ position: 'absolute', top: 60, width: 300, height: 200 }}
              selectedValue={Comp}
              onValueChange={this.onCompChange.bind(this)}
              itemStyle={{ backgroundColor: '#818ea5', marginLeft: 0, paddingLeft: 15}}
            >
       {resource.compsearch.map(p=>(<Picker.Item  label={p} key={"comp"+p} value={p}/>))}
        </Picker>
          </Body>
        </Container>
         );
       }
     }
     export default SearchPage