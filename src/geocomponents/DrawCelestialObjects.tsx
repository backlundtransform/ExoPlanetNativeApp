import * as React from 'react'
import { Marker } from 'react-native-maps'
import { Image } from 'react-native'
import celestialObject from '../sensor/celestial-objects'

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
    navigateToPlanet = (planet: any) => {
        this.props.navigation.navigate('d3view', { navigation: planet })
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
            <React.Fragment>
                {celestialObject.map(planet => (
                    <Marker
                        key={planet.name}
                        coordinate={{
                            longitude: planet.coordinates[1],
                            latitude: planet.coordinates[0],
                        }}
                        title={planet.name}
                        onPress={() =>
                            this.navigateToPlanet({
                                name: planet.name,
                                star: { name: 'Sun' },
                            })
                        }
                    >
                        <Image source={planet.image} />
                    </Marker>
                ))}
            </React.Fragment>
        )
    }
}
