import * as React  from  'react';
import {  Button, Left,Header  } from 'native-base';
import styles from '../styles/defaultStyle';
import StarMap from '../pages/StarMap';
import  {Drawer}  from './Drawer'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import{resource} from '../config/Resource'
interface GpsMenuProps{navigate:any}
interface GpsMenuState {  menu :  boolean}
const _ismounted =true
export default class GpsMenu extends React.Component<GpsMenuProps, GpsMenuState> {
  constructor(props) {
    super(props);
     this.state = {
      menu:true  }
  }

  componentWillReceiveProps(nextProps){
  

   
  }

 HandleClick=()=>{

//to do use redux instead
  const {menu} =this.state
  alert(menu?resource.sensorstart:resource.sensorstop)
  this.props.navigate.setParams({gps:this.state.menu}) 

  this.setState({ menu:!this.state.menu})
  }
  render() {
    
    return (

        <Header ref="header" style={styles.header}>
        <Left >
        <Button transparent onPress={() => this.HandleClick()} >
            <Icon style={styles.white} name={ this.state.menu? "crosshairs-gps": "gesture-tap"} size={30} />
          </Button></Left>
      </Header>
     
    );
  }
}