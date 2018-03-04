import * as React  from  'react';
import {  Button, Left, Icon,Header,Right  } from 'native-base';
import styles from '../styles/defaultStyle';
import  InfoNavigator  from './InfoNavigator';
interface TabBarProps{navigator:any}
interface TabBarState {tab:string }
export default class TabBar extends React.Component<TabBarProps, TabBarState> {
  constructor(props) {
    super(props);
   this.state = {
    tab:"Planet"
   }
  }
 

 HandleClick=(tab:string)=>{
 
  this.setState({tab:tab})
    this.props.navigator.navigate(tab, {planet:this.props.navigator.state.params.planet})

}
  render() {
   const {tab}=this.state
    return (

        <Header style={styles.tabcontent}>
       
        <Button style={[styles.tab, {backgroundColor: tab=="Planet"?'#865191':'#50607a'} ]} onPress={() => this.HandleClick("Planet")} >
            <Icon name={ "planet"}  />
          </Button>
        
        <Button style={[styles.tab, {backgroundColor: tab=="Star"?'#865191':'#50607a'}]} onPress={() => this.HandleClick("Star")} >
            <Icon name={ "star"}  />
          </Button>  
      </Header>
     
    );
  }
}

