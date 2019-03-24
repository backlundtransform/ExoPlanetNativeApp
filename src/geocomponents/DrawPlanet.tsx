import * as React from 'react'
import { Image } from 'react-native'
import { Marker } from 'react-native-maps'
import { GetHabitablePlanets } from '../service/getPlanets'

interface DrawPlanetsProps {
    navigation: any
}

export default class DrawPlanet extends React.PureComponent<
    DrawPlanetsProps,
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

    async componentDidMount() {
        const planets = await GetHabitablePlanets()
        this.setState({
            planets,
            loading: false,
        })
    }
    componentDidUpdate() {
        if (this.state.tracksViewChanges) {
            this.setState({
                tracksViewChanges: false,
            })
        }
    }

    render() {
        const { planets } = this.state
        return (
            <React.Fragment>
                {planets.map((planet) => (
                    <Marker
                        key={planet.name}
                        coordinate={planet.coordinate}
                        title={planet.name}
                        onPress={_p => this.navigateToPlanet(planet)}
                    >
                        <Image
                            source={require('../images/marker.png')}
                            style={{ width: 40 }}
                        />
                    </Marker>
                ))}
            </React.Fragment>
        )
    }
}
