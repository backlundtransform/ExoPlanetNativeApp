import * as React from 'react';
import MapView from 'react-native-maps';
import { LocalTile,  UrlTile,Marker, Circle, Polyline, Callout } from 'react-native-maps';
import { View, Text } from 'react-native';
import{geolinesjson} from '../config/geojson'

export default class DrawPolygon extends React.PureComponent<any,any> {
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
        return (<React.Fragment>{geolinesjson.features.map((line,index) =>  (
            <React.Fragment key={"fragment"+ index}><Polyline
              key={"line"+ index}
               coordinates={(line.geometry.coordinates as number[][]).map(p=> { return {latitude:p[1] as number,longitude:p[0] as number}}) }
              strokeColor="#add7ed" 
               strokeWidth={1}
               zIndex={1000000}
          />
          {(line.geometry.coordinates as number[][]).map((p,i)=> { return <Circle   key={`${p[1]}${p[0]}${i}`} center={{latitude:p[1] as number,longitude:p[0] as number}}
          radius={25000}
          zIndex={10000000000}
          strokeColor={"#f2f7f8"}
          fillColor={"#f2f7f8"}></Circle>})} 
            </React.Fragment> 
        ))}</React.Fragment>)
    }
}