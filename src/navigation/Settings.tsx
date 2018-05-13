import  * as React from "react";
import styles from '../styles/defaultStyle';
import{resource} from '../config/Resource'
import {Container,Header,Title,Content,Button,Icon,Right,Body,Left,Picker,Form} from "native-base";
interface SettingsProps{navigate:any}
interface  SettingsPropsState { }
class Settings extends React.Component< SettingsProps, SettingsPropsState> {
  
  constructor(props) {
    super(props);
  
  }
  onValueChange(value: string) {
 
    this.props.navigate.navigate(value) 
  
  }
  render() {
    return (
      <Header ref="header" style={styles.header}>
        <Picker
              mode="dropdown"
              iosIcon={<Icon color="#c6d4ff" name="ios-settings" />}
              style={{ width: 40 }}
              selectedValue={"planets"}
              onValueChange={this.onValueChange.bind(this)}
              itemStyle={{ backgroundColor: '#818ea5', marginLeft: 0, paddingLeft: 15 }}
              itemTextStyle={{ fontSize: 18, color: "#c6d4ff" }}
            >
             <Picker.Item  label={""} value="planets" />
      <Picker.Item  label={resource.search} value="search" />
      <Picker.Item label={resource.dashboard} value="dashboard" />
 </Picker>
    </Header>
  
    );
  }
}
export default  Settings