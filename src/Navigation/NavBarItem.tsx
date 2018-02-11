import  * as React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';


class NavBarItem extends React.Component {
  render() {
   
    const onPress =() =>{}
    return (
      <TouchableOpacity
        style={{ paddingHorizontal: 20 }}
        onPress={() => onPress()}
      >
      
      </TouchableOpacity>

    );
  }
}



export default NavBarItem;