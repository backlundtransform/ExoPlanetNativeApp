import * as React from 'react'
import { Button, Left, Header } from 'native-base'
import styles from '../styles/defaultStyle'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

interface GpsMenuProps {
    navigate: any
}
interface GpsMenuState {
    menu: boolean
}

export default class GpsMenu extends React.Component<
    GpsMenuProps,
    GpsMenuState
> {
    constructor(props) {
        super(props)
        this.state = {
            menu: true,
        }
    }

    HandleClick = () => {
        const { menu } = this.state

        this.props.navigate.setParams({ gps: menu })

        this.setState({ menu: !menu })
    }
    render() {
        return (
            <Header ref="header" style={styles.header}>
                <Left>
                    <Button transparent onPress={() => this.HandleClick()}>
                        <Icon
                            style={styles.white}
                            name={
                                this.state.menu
                                    ? 'crosshairs-gps'
                                    : 'gesture-tap'
                            }
                            size={30}
                        />
                    </Button>
                </Left>
            </Header>
        )
    }
}
