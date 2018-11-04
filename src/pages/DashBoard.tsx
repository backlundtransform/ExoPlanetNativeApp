import * as React from 'react';
import { Container, Body, Text,Spinner} from 'native-base';
import{resource} from '../config/Resource'
import styles from '../styles/defaultStyle'
import {GetStatisticsAsync,statistics} from '../service/getPlanets'

interface DashBoardProps{}
interface DashBoardPropsState { statistics:statistics, loading:boolean}
 class DashBoard extends React.Component<DashBoardProps,DashBoardPropsState> {
  constructor(props) {
    super(props);
    this.state ={
      statistics:null,
      loading:true
    }
  }
  
  async componentWillMount(){

    const statistics =await GetStatisticsAsync();
    this.setState({loading:false,statistics})
  }

    render() {

const  {loading, statistics} = this.state
         return (
           <Container style={styles.listView}>
           {loading?(<Spinner color="#c6d4ff" />):(
           <Body>
            <Text style={styles.stattitle}>{resource.foundplanets}</Text><Text style={styles.statnum}>{statistics.confirmedPlanets}</Text>
             <Text style={styles.stattitle}>{resource.foundhabitableplanets}</Text><Text style={styles.statnum}>{statistics.confirmedHabitablePlanets}</Text>
          </Body>)}
        </Container>
         );
       }
     }
     
     export default DashBoard