import {StyleSheet } from 'react-native';

 const styles = StyleSheet.create({
    container: {
     
      backgroundColor: '#818ea5',

    },  color: {
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