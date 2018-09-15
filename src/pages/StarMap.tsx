import * as React from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { AppRegistry, StyleSheet, View, Platform, Image, Dimensions, DeviceEventEmitter, NativeModules } from 'react-native';
import { resource } from '../config/Resource'
import MapView from 'react-native-maps';
import { LocalTile, UrlTile, Marker, Circle, Polyline, Callout } from 'react-native-maps';
import DrawPolyline from '../geocomponents/DrawPolyline'
import DrawStar from '../geocomponents/DrawStar'
import DrawPlanet from '../geocomponents/DrawPlanet'
import HamburgerMenu from '../navigation/HamburgerMenu'
import { siderealtime, dot_product, right_ascension, getdeclination, azimuth_degree } from '../sensor/mathfunctions'
import Compass from '../sensor/compass'
import { constants } from '../config/constants'
import styles from "../styles/defaultStyle";
import customMap from "../styles/customMap"

const start = {
  latitude: 40,
  longitude: -90,
  latitudeDelta: 20,
  longitudeDelta: 10,
}
interface StarmapProp { navigation: any, Accelerometer: any, gyroscop: any, Magnetometer: any }
interface StarmapState {
  region: any,
  currentRegion?: any,
  degree: number,
  zoom: number,
  altitude: number,
  siderealtime: string
  rightascension: number,
  Accelerometer: any | undefined
  declination: number, gps: boolean
}
class StarMap extends React.Component<StarmapProp, StarmapState> {

  constructor(props) {
    super(props);
    this.state = {
      region: start,
      degree: 0,
      zoom: 7,
      Accelerometer: undefined,
      rightascension: start.longitude / 15,
      declination: start.latitude,
      gps: false,
      altitude: 0,
      siderealtime: ""
    };

    setTimeout(() => { navigator.geolocation.getCurrentPosition(this.success, this.error) }, 100)

  }

  success = (pos) => {
    var crd = pos.coords;

    if (this.refs.map && this.state.currentRegion === undefined) {

      this.setState({ currentRegion: { latitude: crd.latitude, longitude: crd.longitude } });
    }

  };

  error = (err) => {


  };


  onRegionChangeComplete(region) {

    if (!(this.state.gps)) {
      const rightascension = 12 + -1 * region.longitude / 15
      const declination = region.latitude
      this.setState({ rightascension, declination })
    }

  }
  componentDidMount() {

    this.sensorInit()


  }

  sensorInit() {

    DeviceEventEmitter.addListener('Accelerometer', (data) => {


      let { region, currentRegion, degree, gps } = this.state
      const Accelerometer = data

      if (this.state.currentRegion !== undefined && gps) {
        const altitude = dot_product(Accelerometer.z, Accelerometer.y, Accelerometer.x, 1, 0, 0)
        let rightascension = right_ascension(currentRegion.longitude, currentRegion.latitude, altitude, degree) / 15
        const declination = getdeclination(currentRegion.latitude, altitude, degree)

        const longitude = -15 * Math.abs(rightascension - 12)
        region = {
          latitude: declination,
          longitude: longitude,
          latitudeDelta: 10,
          longitudeDelta: 10,
        }
        this.refs.map && this.setState({ Accelerometer, gps, region, rightascension, declination, altitude, siderealtime: siderealtime(this.state.currentRegion.longitude) }, () => this.forceUpdate());

      }
    });

    DeviceEventEmitter.addListener('Orientation', (data) => {
      const { gps, Accelerometer } = this.state

      if (Accelerometer !== undefined && gps) {

        this.refs.map && this.setState({ degree: data.azimuth }, () => this.forceUpdate())
      }
    });

  }

  componentWillUnmount() {
    let mSensorManager = require('NativeModules').SensorManager;

    mSensorManager.stopMagnetometer();
    mSensorManager.stopAccelerometer();
    mSensorManager.stopOrientation();
  }
  componentWillReceiveProps(nextProps) {

    const gps = nextProps.navigation.state.params && nextProps.navigation.state.params.gps
    let mSensorManager = require('NativeModules').SensorManager;


    if (gps) {
      mSensorManager.startAccelerometer(300);
      mSensorManager.startMagnetometer(300);
      mSensorManager.startOrientation(300);
    }
    else {

      mSensorManager.stopMagnetometer();
      mSensorManager.stopAccelerometer();
      mSensorManager.stopOrientation();
    }

    this.setState({ gps })

  }


  render() {

    const { region, gps, rightascension, declination, degree, currentRegion, altitude, siderealtime } = this.state;


    return (<Container ref="map" style={styles.mapcontainer}>
      <MapView
        moveOnMarkerPress={false}
        mapType={"standard"}
        style={styles.map}
        initialRegion={start}
        customMapStyle={customMap}
        region={gps ? region : null}
        showsCompass={true}
        minZoomLevel={2}
        maxZoomLevel={4}
        onRegionChangeComplete={(region) => this.onRegionChangeComplete(region)}
      ><UrlTile urlTemplate={constants.tiles} />
        {currentRegion && (<DrawPolyline navigation={this.props.navigation} />)}{currentRegion && (<DrawStar />)}{currentRegion && (<DrawPlanet navigation={this.props.navigation} />)}</MapView>
      {currentRegion && (<Compass longitude={currentRegion.longitude} latitude={currentRegion.latitude} azimuth={degree} altitude={altitude} rightascension={rightascension} declination={declination} siderealtime={siderealtime} gps={gps} />)}
    </Container>)
  }
}
export default StarMap;