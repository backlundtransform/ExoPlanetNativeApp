import * as React from 'react';
import MapView from 'react-native-maps';
import {Spinner} from "native-base"
import { LocalTile,  UrlTile,Marker, Circle, Polyline, Callout } from 'react-native-maps';

import{ GetHabitablePlanets, Planet } from '../service/getPlanets'
interface DrawPlanetsProps{ navigation:any}

export default class DrawPlanet extends React.PureComponent<DrawPlanetsProps,any> {
    constructor(props) {
        super(props);
        this.state = {
            tracksViewChanges: true,
            lines:[],
            planets:[],
            loading:true
        }

    }
    navigateToPlanet=(planet:any)=>{
 
        this.props.navigation.navigate("d3view",{navigation:planet})
             }
      
    componentWillReceiveProps(nextProps) {
        if (this.props !== nextProps) {
            this.setState(() => ({
                tracksViewChanges: true,
            }));
        }
    }

   async componentWillMount() {
  const planets = await GetHabitablePlanets()
  this.setState({
   planets, loading :false
});
    }



    componentDidUpdate() { 
        if (this.state.tracksViewChanges) {
            this.setState({
                tracksViewChanges: false
            });
        }
    }

    render() {

        const {planets,loading} = this.state
    return (<React.Fragment>{ planets.map((planet,index) =>  (
            <Marker
              key={planet.name}
              coordinate={planet.coordinate}
              title={planet.name}
             image={require('../images/marker.png')}
             onPress={p=> this.navigateToPlanet(planet)}
             />))}</React.Fragment>)

    }
}