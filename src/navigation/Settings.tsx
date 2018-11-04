import  * as React from "react";
import styles from '../styles/defaultStyle';
import{resource} from '../config/Resource'
import {Header,Icon,} from "native-base";
import {Picker} from "react-native";
import {setFilter} from '../redux/actions';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
interface SettingsProps{navigate:any, filter}
interface  SettingsPropsState { }
class Settings extends React.Component<SettingsProps, SettingsPropsState> {
  
  constructor(props) {
    super(props);
  
  }
  onValueChange(value: string) {
 
    this.props.navigate.navigate(value) 
  
  }

  render() {
    const {filter}= this.props

    const color =filter===undefined?"#fff":"red" 
    return (
      <Header style={styles.d3button} >
      <Icon name='ios-settings'style={{ width: 20, zIndex:-10, margin:10,color:color} }/>
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

const mapStateToProps=(state, props) => {

  return {
    filter: state.searchReducer.filter
  }
}

const mapDispatchToProps=(dispatch)=> {
  return bindActionCreators({setFilter:setFilter},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Settings);