import React from 'react';
import './App.scss';
import AppLayout from './layout';
import { Provider } from 'react-redux';
import store from './utilities/store'

function App() {
  return (
    <Provider store={store}>
      <AppLayout />
    </Provider>
  );
}

export default App;
