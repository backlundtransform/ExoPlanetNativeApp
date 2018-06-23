import * as React from 'react';
import {AppRegistry, StyleSheet, View,Image, StyleProp} from 'react-native';
import {Picker,Form, Container, Header, Title, Content,Thumbnail, List, Button, Left, Right, Body, Text, ListItem} from 'native-base';
import{resource} from '../config/Resource'
import styles from '../styles/defaultStyle'
import SearchPicker from '../components/SearchPicker'
interface SearchPageProps{navigate:any}
interface SearchPagePropsState {mass:string, comp:string,atmos:string,disc:string, temp:string,lightyears:string}

 class SearchPage extends React.Component<SearchPageProps,SearchPagePropsState> {
  constructor(props) {
    super(props);
   this.state ={mass:resource.masstitle,comp:"",atmos:"",disc:"",temp:"",lightyears:"" }
   this.handleChange = this.handleChange.bind(this);
  }
      


  handleChange (value: any, key:any) {

 this.setState({ [key]: value });
  }
  

    render() {
   
      const {comp,mass,atmos,disc,temp,lightyears}=this.state
         return (
           <Container style={styles.listView}>
          <SearchPicker statekey={"mass"} title={resource.masstitle} value={mass}  searcharray={resource.masssearch} onValueChange={this.handleChange} />
          <SearchPicker statekey={"comp"} title={resource.comptitle} value={comp}  searcharray={resource.compsearch} onValueChange={this.handleChange} />
          <SearchPicker statekey={"temp"} title={resource.temptitle} value={temp}  searcharray={resource.tempsearch} onValueChange={this.handleChange} />
          <SearchPicker statekey={"atmos"} title={resource.atmostitle} value={atmos}  searcharray={resource.atmossearch} onValueChange={this.handleChange} />
          <SearchPicker statekey={"disc"}  title={resource.disctitle} value={disc}  searcharray={resource.discsearch} onValueChange={this.handleChange} />
          <SearchPicker statekey={"lightyears"} title={resource.atmostitle}  value={lightyears}  searcharray={resource.lightyearsearch} onValueChange={this.handleChange} />
        </Container>
         );
       }
     }
     export default SearchPage