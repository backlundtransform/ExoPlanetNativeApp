import * as React from 'react';
import {AppRegistry, StyleSheet, View,Image, StyleProp} from 'react-native';
import {Picker,Form, Container, Header, Title, Content,Thumbnail, List, Button, Left, Right, Body, Text, ListItem,Radio,Grid,Col  } from 'native-base';
import{resource} from '../config/Resource'
import styles from '../styles/defaultStyle'
import SearchPicker from '../components/SearchPicker'
import {filter,Planet,SearchPageState} from '../service/getPlanets';
import {setFilter} from '../redux/actions';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
interface SearchPageProps{navigation:any, setFilter:any,filter:any}
interface SearchPagePropsState {mass:string, comp:string,atmos:string,disc:string, temp:string,lightyears:string, sort:string,order:boolean }

 class SearchPage extends React.Component<SearchPageProps,SearchPagePropsState> {
  constructor(props) {
    super(props);

   this.state ={mass:"",comp:"",atmos:"",disc:"",temp:"",lightyears:"",sort:"", order:true}
   this.handleChange = this.handleChange.bind(this);
  }
      


handleChange (value: any, key:any) 
{
  if(key==="order"){

    value=!this.state.order
  }
 this.setState({ [key]: value }, () => this.setfilter());

}


componentWillMount(){
 const {filter} =this.props

  if(filter===undefined){

    return
  }
 const action =filter.filter

  this.setState({mass:action.mass,comp:action.comp,atmos:action.atmos,disc:action.disc,temp:action.temp,lightyears:action.lightyears,sort:action.sort, order: action.order})

}

setfilter = ()=> {
  let {comp,mass,atmos,disc,temp,lightyears,order,sort}=this.state
  const { setFilter} =this.props

  setFilter({filter:{comp,mass,atmos,disc,temp,lightyears, order,sort}})

  }
  search = ()=> {
  
    const {navigation} =this.props
  navigation.replace("planets");
  
  
    }
   clear= ()=>{
  
    const { setFilter} =this.props
    setFilter(undefined)
    
    this.setState({mass:"",comp:"",atmos:"",disc:"",temp:"",lightyears:"",sort:"", order:true})
      }
  


    render() {
   
      const {comp,mass,atmos,disc,temp,lightyears,order,sort}=this.state
   

         return (
           <Container style={styles.listView}>
          <SearchPicker statekey={"mass"} title={resource.masstitle} value={mass}  searcharray={resource.masssearch} onValueChange={this.handleChange} />
          <SearchPicker statekey={"comp"} title={resource.comptitle} value={comp}  searcharray={resource.compsearch} onValueChange={this.handleChange} />
          <SearchPicker statekey={"temp"} title={resource.temptitle} value={temp}  searcharray={resource.tempsearch} onValueChange={this.handleChange} />
          <SearchPicker statekey={"atmos"} title={resource.atmostitle} value={atmos}  searcharray={resource.atmossearch} onValueChange={this.handleChange} />
          <SearchPicker statekey={"disc"}  title={resource.disctitle} value={disc}  searcharray={resource.discsearch} onValueChange={this.handleChange} />
          <SearchPicker statekey={"lightyears"} title={resource.lightyeartitle}  value={lightyears}  searcharray={resource.lightyearsearch} onValueChange={this.handleChange} />
          <SearchPicker statekey={"sort"} title={resource.sorttordertitle}  value={sort}  searcharray={resource.sortsearch} onValueChange={this.handleChange} />

           <ListItem selected={!order} onPress={(e:any)=>this.handleChange(e.value, "order")}>
            <Left>
              <Text>{resource.order[0]}</Text>
            </Left>
            <Right>
              <Radio
          
                selected={!order}
              />
            </Right>
          </ListItem>

             <ListItem selected={order}     onPress={(e:any)=>this.handleChange(e.value, "order")}>
            <Left>
              <Text >{resource.order[1]}
              </Text>
            </Left>
            <Right >
              <Radio
              
             
                selected={order}
              />
            </Right>
          </ListItem><Body style={{margin:20}}><Grid>
          <Col size={2}></Col>
                        <Col size={4}><Button onPress={()=>this.search()}  style={styles.button}>
                      <Text>{resource.search}</Text></Button></Col>
                        <Col size={4} ><Button onPress={()=>this.clear()} style={styles.button}>
                      <Text>{resource.clear}</Text></Button></Col>
                      <Col size={2}></Col>
                    </Grid ></Body>
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
  