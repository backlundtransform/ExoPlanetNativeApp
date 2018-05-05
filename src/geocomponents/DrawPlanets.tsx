import * as React from 'react';
import MapView from 'react-native-maps';
import { LocalTile,  UrlTile,Marker, Circle, Polyline, Callout } from 'react-native-maps';
import { View, Text } from 'react-native';

import{PlanetList } from '../service/getPlanets'
interface DrawPlanetsProps{ navigateToPlanet:(planet)=>void}
export default class DrawPlanets extends React.PureComponent<DrawPlanetsProps,any> {
    constructor(props) {
        super(props);
        this.state = {
            tracksViewChanges: true,
            lines:[]
        }

    }

    componentWillReceiveProps(nextProps) {
        if (this.props !== nextProps) {
            this.setState(() => ({
                tracksViewChanges: true,
            }));
        }
    }

      


    componentDidUpdate() { 
        if (this.state.tracksViewChanges) {
            this.setState({
                tracksViewChanges: false
            });
        }
    }

    render() {
        return (<React.Fragment>{PlanetList.filter(p=>p.Esi>=0.7 && p.Coordinate!==undefined).map((planet,index) =>  (
            <Marker
              key={planet.Name}
              coordinate={planet.Coordinate}
              title={planet.Name}
             image={require('../images/marker.png')}
              onPress={p=> this.props.navigateToPlanet(planet)}
             />) ) }</React.Fragment>)

    }
}