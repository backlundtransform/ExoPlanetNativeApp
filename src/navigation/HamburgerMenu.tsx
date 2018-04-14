import * as React  from  'react';
import {  Button, Left, Icon,Header  } from 'native-base';
import styles from '../styles/defaultStyle';
import  {Drawer}  from './Drawer'
interface HamburgerMenuProps{navigate:any}
interface HamburgerMenuState {  menu :  boolean}
const _ismounted =true
export default class HamburgerMenu extends React.Component<HamburgerMenuProps, HamburgerMenuState> {
  constructor(props) {
    super(props);
     this.state = {
      menu:true  }
  }

  componentWillReceiveProps(nextProps){
   const defaultGetStateForAction = Drawer.router.getStateForAction;

    Drawer.router.getStateForAction = (action, state) => {
      if(action.routeName === 'DrawerClose' && this.refs.header){
        this.setState({ menu:true})
      }
      else if(action.routeName === 'DrawerOpen' && this.refs.header){
        this.setState({ menu:false})
      }
      else if(action.routeName === 'planets' && this.refs.header){
        this.setState({ menu:true})
      }
        return defaultGetStateForAction(action, state);
    };
  }

 HandleClick=()=>{
  if(!this.refs.header){
    return
  }
  this.props.navigate.navigate("DrawerToggle") 
  this.setState({ menu:!this.state.menu})
  }
  render() {
    
    return (

        <Header ref="header" style={styles.header}>
        <Left >
        <Button transparent onPress={() => this.HandleClick()} >
            <Icon name={ this.state.menu? "menu": "close"}  />
          </Button></Left>
      </Header>
     
    );
  }
}

