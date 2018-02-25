import * as React from 'react';
import {AppRegistry, StyleSheet, View,Image } from 'react-native';
import { Container, Header, Title, Content,Thumbnail, List, Button, Left, Right, Body, Icon, Text, ListItem} from 'native-base';
import{resource} from '../config/Resource'
import{PlanetList} from '../service/getPlanets'
import styles from '../styles/defaultStyle'
export default class Planets extends React.Component {

render() {
 
    return (
      <Container style={styles.listView}>
        <Content >
          <List dataArray={PlanetList}
            renderRow={(item) =>
              <ListItem style={styles.listViewItem}>
             <Left>
                <Thumbnail  source={item.Img
            }
          />
              </Left>
              <Body>
                <Text style={styles.listTitle}>{item.Name}</Text>
                <Text style={styles.listText}>{`${item.Type}, ${item.Distance} ${resource.from}`} </Text>
              </Body>
              <Right>
                <Text style={styles.listText}> {item.DiscYear}</Text>
              </Right>
            </ListItem>
            }>
          </List>
        </Content>
      </Container>

    );
  }
}

