import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';
import store from './redux/store';


const MainApp = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  )
}

const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  )
}

export default App;
