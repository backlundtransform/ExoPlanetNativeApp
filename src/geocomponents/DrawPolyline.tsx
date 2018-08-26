import * as React from 'react';
import MapView from 'react-native-maps';
import { LocalTile,  UrlTile,Marker, Circle, Polyline, Callout } from 'react-native-maps';
import { View, Text } from 'react-native';

import{GetConstellationsLines} from '../service/getConstellations'

import{resource} from '../config/Resource'
import styles from '../styles/defaultStyle'

export default class DrawPolyline extends React.PureComponent<{ navigation:any},any> {
    constructor(props) {
        super(props);
        this.state = {
            tracksViewChanges: true,
            lines:{features:[]}

        }

    }
    async componentWillMount() {
        const lines = await GetConstellationsLines()
        this.setState({
            lines
      });
          }
      

    componentWillReceiveProps(nextProps) {
        if (this.props !== nextProps) {
            this.setState(() => ({
                tracksViewChanges: true,
            }));
        }
    }

    navigateToConstellation=(id:number)=>{
       
        this.props.navigation.navigate('solarlist',{const:id})
             }
    componentDidUpdate() { 
        if (this.state.tracksViewChanges) {
            this.setState({
                tracksViewChanges: false
            });
        }
    }

    render() {

        const {lines}=this.state
        return (<React.Fragment>{lines.features.map((line,index) =>  (
            <React.Fragment key={"fragment"+ index}><Polyline
              key={"line"+ index}
               coordinates={(line.geometry.coordinates as number[][]).map(p=> { return {latitude:p[1] as number,longitude:p[0] as number}}) }
              strokeColor="#add7ed" 
               strokeWidth={1}
               zIndex={1000000}
          />
          {line.properties.constellation&&(<Marker  onPress={()=> this.navigateToConstellation(line.properties.constellationid)} coordinate={{latitude:line.geometry.coordinates[0][1]+1 as number,longitude:line.geometry.coordinates[0][0] as number}}><Text style={styles.listTitle} 
         >{line.properties.constellation}</Text></Marker>)}
          {(line.geometry.coordinates as number[][]).map((p,i)=> { return <Circle key={`${p[1]}${p[0]}${i}`} center={{latitude:p[1] as number,longitude:p[0] as number}}
          radius={25000}
          zIndex={10000000000}
          strokeColor={"#f2f7f8"}
          fillColor={"#f2f7f8"}></Circle>})} 
            </React.Fragment> 
        ))}</React.Fragment>)
    }
}