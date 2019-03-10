import * as React from 'react'
import { Marker } from 'react-native-maps'
import { Image } from 'react-native'
import { getCoordinates } from '../sensor/celestial-objects'

interface DrawCelestialObjectsProps {
    navigation: any
}

export default class DrawCelestialObjects extends React.PureComponent<
    DrawCelestialObjectsProps,
    any
> {
    constructor(props) {
        super(props)
        this.state = {
            tracksViewChanges: true,
            lines: [],
            planets: [],
            loading: true,
        }
    }
    navigateToPlanet = () => {
        this.props.navigation.navigate('d3view', {
            navigation: {
                name: 'Tellus',
                star: { name: 'Sun' },
            },
        })
    }

    componentWillReceiveProps(nextProps) {
        if (this.props !== nextProps) {
            this.setState(() => ({
                tracksViewChanges: true,
            }))
        }
    }

    async componentWillMount() {}
    componentDidUpdate() {
        if (this.state.tracksViewChanges) {
            this.setState({
                tracksViewChanges: false,
            })
        }
    }

    render() {
        return (
            <>
                <Marker
                    key={'Mercury'}
                    coordinate={getCoordinates(
                        0.20563,
                        0.3871,
                        29.125,
                        48.331,
                        174.795,
                        7.005,
                    )}
                    title={'Mercury'}
                    onPress={() => this.navigateToPlanet()}
                >
                    <Image source={require('../images/mercury.png')} />
                </Marker>
                <Marker
                    key={'Venus'}
                    coordinate={getCoordinates(
                        0.00677,
                        0.72333,
                        54.884,
                        76.68,
                        50.416,
                        3.395,
                    )}
                    title={'Venus'}
                    onPress={() => this.navigateToPlanet()}
                >
                    <Image source={require('../images/venus.png')} />
                </Marker>
                <Marker
                    key={'Mars'}
                    coordinate={getCoordinates(
                        0.0934,
                        1.52368,
                        286.502,
                        49.558,
                        19.373,
                        1.85,
                    )}
                    title={'Mars'}
                    onPress={() => this.navigateToPlanet()}
                >
                    <Image source={require('../images/mars.png')} />
                </Marker>
                <Marker
                    key={'Jupiter'}
                    coordinate={getCoordinates(
                        0.04849,
                        5.2026,
                        273.867,
                        100.464,
                        20.02,
                        1.303,
                    )}
                    title={'Jupiter'}
                    onPress={() => this.navigateToPlanet()}
                >
                    <Image source={require('../images/jupiter.png')} />
                </Marker>
                <Marker
                    key={'Saturn'}
                    coordinate={getCoordinates(
                        0.05551,
                        9.55491,
                        339.391,
                        113.666,
                        317.021,
                        2.489,
                    )}
                    title={'Saturn'}
                    onPress={() => this.navigateToPlanet()}
                >
                    <Image source={require('../images/saturn.png')} />
                </Marker>
                <Marker
                    key={'Uranus'}
                    coordinate={getCoordinates(
                        0.0463,
                        19.21845,
                        98.999,
                        74.006,
                        141.05,
                        0.773,
                    )}
                    title={'Uranus'}
                    onPress={() => this.navigateToPlanet()}
                >
                    <Image source={require('../images/uranus.png')} />
                </Marker>
                <Marker
                    key={'Neptune'}
                    coordinate={getCoordinates(
                        0.00899,
                        30.11039,
                        276.34,
                        131.784,
                        256.225,
                        1.7,
                    )}
                    title={'Neptune'}
                    onPress={() => this.navigateToPlanet()}
                >
                    <Image source={require('../images/neptune.png')} />
                </Marker>
            </>
        )
    }
}
