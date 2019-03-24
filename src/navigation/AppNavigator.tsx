import * as React from 'react'
import { Drawer } from './Drawer'
import styles from '../styles/defaultStyle'
import HamburgerMenu from './HamburgerMenu'
import { StackNavigator } from 'react-navigation'

export const AppNavigator = StackNavigator({
    first: {
        screen: Drawer,
        navigationOptions: ({ navigation }) => ({
            headerStyle: styles.container,
            headerLeft: <HamburgerMenu navigate={navigation} />,
            handleNavigationState: () => {
                return <HamburgerMenu navigate={null} />
            },
        }),
    },
})
