import * as React from 'react'
import { View, Text } from 'react-native'

class SwichExample extends React.Component {
   state = {
     
      lastPosition: 'unknown',
   }

 

  
  
   render() {
    const num = navigator.geolocation.watchPosition((position)  => {
        const lastPosition = JSON.stringify(position);
     
        this.setState({ lastPosition });
       
     });
    
     console.log(this.state.lastPosition  )
 
      return null
   }
}
export default SwichExample

