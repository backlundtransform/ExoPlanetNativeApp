import {StyleSheet } from 'react-native';

 const styles = StyleSheet.create({
    container: {
     
      backgroundColor: '#818ea5',

    }, 
    darkcontainer: {
     
      backgroundColor: '#50607a',

    }, 
    
    color: {
      color: '#c6d4ff',

    },
   listTitle: {
      color: '#c6d4ff',
      fontWeight: 'bold',
      fontSize: 16,
      textDecorationLine:'underline'

    },
    listText: {
      color: '#c6d4ff',
    
      fontSize: 12,
     

    },
    white: {
      color: '#fff',

    },
   left: {
     width:50,
     flex:0,
     margin: -10,
     justifyContent: 'center',
     alignSelf: 'stretch',
     backgroundColor: '#50607a',
     alignItems: 'center',
  },
  tabcontent: {
    backgroundColor: '#818ea5'
    , flexDirection:'row'
  },
  tab: {
  
    flex:0.5,
    borderColor:"#61C8F0",
    marginLeft: -10,
    marginRight: -10,
  height:55,
   borderBottomWidth: StyleSheet.absoluteFill,
    justifyContent: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#50607a',
   
 },
 
  headercontent: {
    justifyContent: 'flex-start',
    backgroundColor: '#818ea5',
    
 
 },
    headerstyle: {
     
      backgroundColor: '#818ea5',
      color: '#c6d4ff',
  
    },
    navItemDesign: {
      padding: 20,
      margin: 10,
      color: '#c6d4ff',
      fontWeight: 'bold',
      borderBottomColor: '#c6d4ff',
      borderBottomWidth: StyleSheet.hairlineWidth,
      flex: 1
    },
    infoContent: {
      padding: 25,
      margin: 0,
      height: 130,
   
      backgroundColor: '#50607a',
      borderWidth: StyleSheet.hairlineWidth,
      flex: 1
    },
    header: {
   
      backgroundColor: '#50607a',
    },

   sidebarImage:{
      height: 200,
      alignSelf: "stretch",
      justifyContent: "center",
      alignItems: "center"
      
    },

    listView:{
      backgroundColor: '#818ea5',

    },
    listViewItem:{
      padding: 25,
      margin: 10,
      height: 130,
   
      backgroundColor: '#50607a',
      borderWidth: StyleSheet.hairlineWidth,
      flex: 1
    }

  });


  export default styles;