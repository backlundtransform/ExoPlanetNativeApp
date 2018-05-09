import * as React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import  {AppNavigator } from './navigation/AppNavigator';
import store from './store';
import { Provider } from 'react-redux';
class Main extends React.Component {

  render() {
    

    return ( <Provider store={store}>
        <AppNavigator
        navigation={addNavigationHelpers({
          
        })}
      /> </Provider>
    );
  }
}

export default Main;