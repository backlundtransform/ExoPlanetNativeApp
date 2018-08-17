import * as React from 'react';
import {AppRegistry, StyleSheet, View, ScrollView} from 'react-native';
import { Container, Header, Picker,Title, Content,Thumbnail, List, Button, Left, Right, Body, Icon, Text, ListItem, Spinner,Item,Input } from 'native-base';
import{resource} from '../config/Resource'
import{filter,Planet,PlanetList,planetcolor,storeBase64 } from '../service/getPlanets'
import styles from '../styles/defaultStyle'
import {getData} from '../redux/actions';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import Search from "../navigation/Search";
import {Gradient} from '../styles/radialgradients'
import Svg,{Circle,G,ClipPath,Path,Rect,Image, Use,Defs,} from 'react-native-svg';

interface PlanetsProps{navigation:any, getData:any,planets: Array<Planet>, loading:boolean}
interface  PlanetsPropsState {loading:boolean, top: number, color: any}

class Planets extends React.Component<PlanetsProps, PlanetsPropsState> {
  constructor(props) {
    super(props);
    this.state = {loading:true, top: 100,color:''}

  }
async componentDidMount() {
  const {getData,planets,navigation,loading} =this.props
  const filter = navigation.state.params

  let color= JSON.parse(await storeBase64())

   await getData(navigation.state.params,100)
   this.setState({color})
   if(navigation.state.routeName=== "planets" && planets.length>0 ){
    this.setState({loading,color})
   }


}
componentWillReceiveProps(nextProps){
  this.setState({loading:nextProps.loading})

}
isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
  const paddingToBottom = 20;
  return layoutMeasurement.height + contentOffset.y >=
    contentSize.height - paddingToBottom;
};
onScrollEnd=async (nativeEvent:any)=>{

 
  if (this.isCloseToBottom(nativeEvent)) {
    const {getData,planets,navigation,loading} =this.props
   
  const top=this.state.top+100; 

     await getData(navigation.state.params,top)
this.setState({top}, ()=>{this.refs._scrollView.scrollTo({y:0,x:0, animated:true})

})
  }

}
async search(query:string){

  await this.props.getData({Name:query} as filter)
}


render() {
  const {planets,navigation,getData} =this.props

  let {loading,color} =this.state

    return (
      <Container>
       <Search search={(value)=>this.search(value)}/>
       <ScrollView style= {styles.container} ref='_scrollView' onScroll={({nativeEvent})=>this.onScrollEnd(nativeEvent)} >
            {loading?(<Spinner color="#c6d4ff" />):(<List dataArray={planets}
            renderRow={(item) =>
              <ListItem style={styles.listViewItem} onPress={() => this.props.navigation.navigate('infopages', {planet:item, color:color[item.img.uri]})}>
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
        href={{uri:  color[item.img.uri]} }
        clipPath="url(#clip)"
    />
     <Circle 
        cx="50" cy="40" r="30" 
        fillOpacity={0.4}
        fill={`url(#${item.img.uri})`}/></G>
        </Svg>

              </Left>
              <Body>
                <Text style={styles.listTitle}>{item.name}</Text>
                <Text style={styles.listText}>{`${item.type&&item.type !== null?item.type:""}`}</Text>
                <Text style={styles.listText}>{`${item.distance !== 0?Math.round(item.distance):""} ${item.distance !== 0?resource.from:""}`} </Text>
              </Body>
              <Right>
                <Text style={styles.listText}> {item.discYear !== null?item.discYear:"" }</Text>
              </Right>
            </ListItem>
            }>
          </List>)}</ScrollView >
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
