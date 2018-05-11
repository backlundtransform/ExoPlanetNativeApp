import * as React from 'react';
import {AppRegistry, StyleSheet, View,Image } from 'react-native';
import { Container, Header, Title, Content,Thumbnail, List, Button, Left, Right, Body, Icon, Text, ListItem} from 'native-base';
import{resource} from '../config/Resource'
import{filter,GetPlanetList,Planet,PlanetList } from '../service/getPlanets'
import styles from '../styles/defaultStyle'
import {getData} from '../redux/actions';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

interface PlanetsProps{navigation:any, getData:any}
interface  PlanetsPropsState {planetlist:Array<Planet> }
class Planets extends React.Component<PlanetsProps, PlanetsPropsState> {
  constructor(props) {
    super(props);
    
    this.state = {
      planetlist:GetPlanetList(props.navigation.state.params)
    }
  
  }
componentDidMount() {

   this.props.getData()

}

render() {


    return (
      <Container style={styles.listView}>
        <Content >
          <List dataArray={this.state.planetlist}
            renderRow={(item) =>
              <ListItem style={styles.listViewItem} onPress={() => this.props.navigation.navigate('infopages', {planet:item})}>
             <Left>
                <Thumbnail  source={item.Img}
          />
              </Left>
              <Body>
                <Text style={styles.listTitle}>{item.Name}</Text>
                <Text style={styles.listText}>{`${item.Type}, ${item.Distance} ${resource.from}`} </Text>
              </Body>
              <Right>
                <Text style={styles.listText}> {item.DiscYear}</Text>
              </Right>
            </ListItem>
            }>
          </List>
        </Content>
      </Container>    

    );
  }
}

function mapStateToProps(state, props) {
  return {
      loading: state.planetReducer.loading,
     planets: state.planetReducer.data
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({getData:getData},dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Planets);
