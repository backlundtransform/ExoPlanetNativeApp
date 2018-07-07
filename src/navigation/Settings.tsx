import  * as React from "react";
import styles from '../styles/defaultStyle';
import{resource} from '../config/Resource'
import {Container,Header,Title,Content,Button,Icon,Right,Body,Left,Form} from "native-base";
import {Picker} from "react-native";
interface SettingsProps{navigate:any}
interface  SettingsPropsState { }
class Settings extends React.Component<SettingsProps, SettingsPropsState> {
  
  constructor(props) {
    super(props);
  
  }
  onValueChange(value: string) {
 
    this.props.navigate.navigate(value) 
  
  }
  render() {
    return (
      <Header style={styles.d3button} >
      <Icon name='ios-settings'
 style={{ width: 20, zIndex:-10, margin:10,color:"#fff"} }
/>
        <Picker
              mode="dropdown"
              style={{ position: 'absolute', top: 0, width: 100, height: 1000 }}
              selectedValue={"planets"}
              onValueChange={this.onValueChange.bind(this)}
              itemStyle={{ backgroundColor: '#818ea5', marginLeft: 0, paddingLeft: 15}}
            >
     <Picker.Item  label={""} value="planets" />
      <Picker.Item  label={resource.search} value="search" />
      <Picker.Item label={resource.dashboard} value="dashboard" /></Picker>
    </Header>);
  }
}
export default  Settings