import * as React from 'react';
import MapView from 'react-native-maps';
import { LocalTile,  UrlTile,Marker, Circle, Polyline, Callout } from 'react-native-maps';
import { View, Text } from 'react-native';
import{GetStarsMarkers} from '../service/getConstellations'
export default class DrawStar extends React.PureComponent<any,any> {
    constructor(props) {
        super(props);
        this.state = {
            tracksViewChanges: true,
            stars:{features:[]}
        }

    }

    componentWillReceiveProps(nextProps) {
        if (this.props !== nextProps) {
            this.setState(() => ({
                tracksViewChanges: true,
            }));
        }
    }

    async componentWillMount() {
        const  stars = await GetStarsMarkers()
        this.setState({
            stars
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
     const  {stars}=this.state
        return (<React.Fragment>{ stars.features.map((star,index) =>  ( 
 <Marker
     coordinate={{  latitude:star.geometry.coordinates[1] as number,longitude:star.geometry.coordinates[0] as number}}
      key={"star"+ index}
      image ={require('../images/smarker.png')}
     title={star.properties.name}
      description={star.properties.constellation}
        />))}</React.Fragment>)

    }
}