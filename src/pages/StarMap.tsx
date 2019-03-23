import * as React from 'react'
import { Container } from 'native-base'
import { DeviceEventEmitter } from 'react-native'
import MapView, { UrlTile } from 'react-native-maps'
import DrawPolyline from '../geocomponents/DrawPolyline'
import DrawStar from '../geocomponents/DrawStar'
import DrawPlanet from '../geocomponents/DrawPlanet'
import DrawCelestialObjects from '../geocomponents/DrawCelestialObjects'
import {
    siderealtime,
    dot_product,
    right_ascension,
    getdeclination,
    azimuth_degree,
} from '../sensor/mathfunctions'
import Compass from '../sensor/compass'
import { constants } from '../config/constants'
import styles from '../styles/defaultStyle'
import customMap from '../styles/customMap'

const start = {
    latitude: 40,
    longitude: -90,
    latitudeDelta: 20,
    longitudeDelta: 10,
}
interface StarmapProp {
    navigation: any
    Accelerometer: any
    gyroscop: any
    Magnetometer: any
}
interface StarmapState {
    region: any
    currentRegion?: any
    degree: number
    zoom: number
    altitude: number
    siderealtime: string
    rightascension: number
    Accelerometer: any | undefined
    declination: number
    gps: boolean
}
class StarMap extends React.Component<StarmapProp, StarmapState> {
    constructor(props) {
        super(props)
        this.state = {
            region: start,
            degree: 0,
            zoom: 7,
            Accelerometer: undefined,
            rightascension: start.longitude / 15,
            declination: start.latitude,
            gps: false,
            altitude: 0,
            siderealtime: '',
        }

        setTimeout(() => {
            navigator.geolocation.getCurrentPosition(this.success, this.error)
        }, 100)
    }

    success = pos => {
        var crd = pos.coords

        if (this.refs.map && this.state.currentRegion === undefined) {
            this.setState({
                currentRegion: {
                    latitude: crd.latitude,
                    longitude: crd.longitude,
                },
            })
        }
    }
    error = err => {
        console.log(err)
    }

    onRegionChangeComplete(region) {
        const rightascension = 12 + (-1 * region.longitude) / 15
        const declination = region.latitude
        this.setState({ rightascension, declination })
    }
    componentDidMount() {
        this.sensorInit()
    }

    sensorInit() {
        DeviceEventEmitter.addListener('Accelerometer', data => {
            let { region, currentRegion, degree, gps } = this.state
            const Accelerometer = data

            if (this.state.currentRegion !== undefined && gps) {
                const altitude =
                    dot_product(
                        Accelerometer.x,
                        Accelerometer.y,
                        Accelerometer.z,
                        0,
                        0,
                        1,
                    ) - 90
                let rightascension = right_ascension(
                    currentRegion.longitude,
                    currentRegion.latitude,
                    altitude,
                    degree,
                )

                const declination = getdeclination(
                    currentRegion.latitude,
                    altitude,
                    degree,
                )

                const longitude = -15 * (rightascension - 12)
                region = {
                    latitude: declination,
                    longitude: longitude,
                    latitudeDelta: 10,
                    longitudeDelta: 10,
                }
                this.refs.map &&
                    this.setState(
                        {
                            Accelerometer,
                            gps,
                            region,
                            rightascension,
                            declination,
                            altitude,
                            siderealtime: siderealtime(
                                this.state.currentRegion.longitude,
                            ),
                        },
                        () => this.forceUpdate(),
                    )
            }
        })

        DeviceEventEmitter.addListener('Magnetometer', data => {
            const { gps, Accelerometer } = this.state

            if (Accelerometer !== undefined && gps) {
                this.refs.map &&
                    this.setState(
                        { degree: azimuth_degree(Accelerometer, data) },
                        () => this.forceUpdate(),
                    )
            }
        })
    }

    componentWillUnmount() {
        let mSensorManager = require('NativeModules').SensorManager

        mSensorManager.stopAccelerometer()
        mSensorManager.stopOrientation()
    }
    componentWillReceiveProps(nextProps) {
        const gps =
            nextProps.navigation.state.params &&
            nextProps.navigation.state.params.gps
        let mSensorManager = require('NativeModules').SensorManager

        if (gps) {
            mSensorManager.startAccelerometer(300)
            mSensorManager.startMagnetometer(300)
        } else {
            mSensorManager.stopAccelerometer()
            mSensorManager.stopMagnetometer()
        }

        this.setState({ gps })
    }

    render() {
        const {
            region,
            gps,
            rightascension,
            declination,
            degree,
            currentRegion,
            altitude,
            siderealtime,
        } = this.state

        return (
            <Container ref="map" style={styles.mapcontainer}>
                <MapView
                    moveOnMarkerPress={false}
                    mapType={'standard'}
                    style={styles.map}
                    initialRegion={start}
                    customMapStyle={customMap}
                    region={gps ? region : null}
                    showsCompass={true}
                    minZoomLevel={2}
                    maxZoomLevel={4}
                    onRegionChangeComplete={region =>
                        this.onRegionChangeComplete(region)
                    }
                >
                    <UrlTile urlTemplate={constants.tiles} />
                    {currentRegion && (
                        <DrawPolyline navigation={this.props.navigation} />
                    )}
                    {currentRegion && (
                        <>
                            <DrawStar />
                            <DrawCelestialObjects
                                navigation={this.props.navigation}
                                isDownUnder={currentRegion.latitude < 0}
                            />
                            <DrawPlanet navigation={this.props.navigation} />
                        </>
                    )}
                </MapView>
                {currentRegion && (
                    <Compass
                        longitude={currentRegion.longitude}
                        latitude={currentRegion.latitude}
                        azimuth={degree}
                        altitude={altitude}
                        rightascension={rightascension}
                        declination={declination}
                        siderealtime={siderealtime}
                        gps={gps}
                    />
                )}
            </Container>
        )
    }
}
export default StarMap
