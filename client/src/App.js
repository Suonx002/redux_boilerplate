import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch></Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
