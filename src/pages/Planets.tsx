import * as React from 'react';
import {AppRegistry, StyleSheet, View} from 'react-native';
import { Container, Header, Picker,Title, Content,Thumbnail, List, Button, Left, Right, Body, Icon, Text, ListItem, Spinner,Item,Input } from 'native-base';
import{resource} from '../config/Resource'
import{filter,GetPlanetList,Planet,PlanetList } from '../service/getPlanets'
import styles from '../styles/defaultStyle'
import {getData} from '../redux/actions';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import Search from "../navigation/Search";
import {Gradient} from '../styles/radialgradients'
import Svg,{Circle,G,ClipPath,Path,Rect,Image, Use,Defs,} from 'react-native-svg';

interface PlanetsProps{navigation:any, getData:any,planets: Array<Planet>, loading:boolean}
interface  PlanetsPropsState {loading:boolean}
class Planets extends React.Component<PlanetsProps, PlanetsPropsState> {
  constructor(props) {
    super(props);
    this.state = {loading:true}

  }
async componentDidMount() {
  const {getData,planets,navigation,loading} =this.props
  const filter = navigation.state.params

   await getData(navigation.state.params)

   if(navigation.state.routeName=== "planets" && planets.length>0 ){
    this.setState({loading:loading})
   }


}
componentWillReceiveProps(nextProps){
  this.setState({loading:nextProps.loading})

}

async search(query:string){

  await this.props.getData({Name:query} as filter)
}
render() {
  const {planets,navigation,getData} =this.props
  console.log(planets);
  const {loading} =this.state


    return (
      <Container style={styles.listView}>
        <Content ><Search search={(value)=>this.search(value)}/>
            {loading?(<Spinner color="#c6d4ff" />):(<List dataArray={planets}
            renderRow={(item) =>
              <ListItem style={styles.listViewItem} onPress={() => this.props.navigation.navigate('infopages', {planet:item})}>
             <Left>


                   <Svg
             height="80" 
             width="80" 
       >      { Gradient(item.star)}
    <G>
    <Defs>
        <ClipPath id="clip">
            <Circle   cx="50" cy="40" r="30"   />
        </ClipPath>
    </Defs>

    <Image
     width="100" height="100" 
        href={item.img} 
        clipPath="url(#clip)"
    />
     <Circle 
        cx="50" cy="40" r="30" 
        fillOpacity={0.6}
        fill={`url(#${item.type})`}/></G>
        </Svg>

              </Left>
              <Body>
                <Text style={styles.listTitle}>{item.name}</Text>
                <Text style={styles.listText}>{`${item.type}, ${item.distance} ${resource.from}`} </Text>
              </Body>
              <Right>
                <Text style={styles.listText}> {item.discYear}</Text>
              </Right>
            </ListItem>
            }>
          </List>)}</Content>
      </Container>    

    );
  }
}

function mapStateToProps(state, props) {

  return {
 
      loading: state.planetReducer.loading,
     planets: state.planetReducer.planets
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getData:getData},dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Planets);
