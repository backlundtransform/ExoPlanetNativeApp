import * as React from 'react'
import { Container, Content, List, Body, Text, ListItem } from 'native-base'
import styles from '../styles/defaultStyle'
import { constants } from '../config/constants'
interface ConstellationsProps {
    navigation: any
}
interface ConstellationsPropsState {}
export default class Constellations extends React.Component<
    ConstellationsProps,
    ConstellationsPropsState
> {
    render() {
        return (
            <Container style={styles.listView}>
                <Content>
                    <List
                        dataArray={constants.constellations}
                        renderRow={(item, index) => {
                            return (
                                <ListItem
                                    style={styles.listViewItem}
                                    onPress={() => {
                                        this.props.navigation.navigate(
                                            'solarlist',
                                            { const: item.id },
                                        )
                                    }}
                                >
                                    <Body>
                                        <Text style={styles.listTitle}>
                                            {item.name}
                                        </Text>
                                    </Body>
                                </ListItem>
                            )
                        }}
                    />
                </Content>
            </Container>
        )
    }
}
