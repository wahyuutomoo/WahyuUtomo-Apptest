import React from 'react';
import { Provider, useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';
import store from './redux/store';
import { Loading } from './components';


const MainApp = () => {
  const { loading_screen } = useSelector((state) => state.FeatureReducer);



  return (
    <>
      <NavigationContainer>
        <Router />
      </NavigationContainer>

      {loading_screen && <Loading type={"loading_screen"} />}
    </>
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
