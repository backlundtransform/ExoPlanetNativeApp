import * as React from 'react';
import {AppRegistry, StyleSheet, View,Image, StyleProp} from 'react-native';
import {Picker,Form, Container, Header, Title, Content,Thumbnail, List, Button, Left, Right, Body, Text, ListItem} from 'native-base';
import{resource} from '../config/Resource'
import styles from '../styles/defaultStyle'
import SearchPicker from '../components/SearchPicker'
import {PlanetList,GetPlanetList,filter,Planet,SearchPageState} from '../service/getPlanets';
import {setFilter} from '../redux/actions';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
interface SearchPageProps{navigate:any, setFilter:any,filter:any}
interface SearchPagePropsState {mass:string, comp:string,atmos:string,disc:string, temp:string,lightyears:string}

 class SearchPage extends React.Component<SearchPageProps,SearchPagePropsState> {
  constructor(props) {
    super(props);

   this.state ={mass:"",comp:"",atmos:"",disc:"",temp:"",lightyears:""}
   this.handleChange = this.handleChange.bind(this);
  }
      


handleChange (value: any, key:any) 
{
 this.setState({ [key]: value });

}
componentWillMount(){
 const {filter} =this.props

  if(filter===undefined){

    return
  }
 const action =filter.filter

  this.setState({mass:action.mass,comp:action.comp,atmos:action.atmos,disc:action.disc,temp:action.temp,lightyears:""})

}

setfilter () {
  let {comp,mass,atmos,disc,temp,lightyears}=this.state
  const { setFilter,navigate} =this.props

  setFilter({filter:{comp,mass,atmos,disc,temp,lightyears}})

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
          <Button style={styles.button}  onPress={() => this.setfilter()}><Text>{resource.search}</Text></Button>
        </Container>
         );
       }
     }


     function mapStateToProps(state, props) {

      return {
     
      filter: state.searchReducer.filter
      }
    }
    
 const mapDispatchToProps=(dispatch)=> {
      return bindActionCreators({setFilter:setFilter},dispatch);
    }
 
    export default connect(mapStateToProps,mapDispatchToProps)(SearchPage);
  