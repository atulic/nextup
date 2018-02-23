import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import App from './components/app';
import Login from './components/login.js';
import reducers from './reducers';
import { authMiddleware } from 'redux-implicit-oauth2';

const createStoreWithMiddleware = applyMiddleware(authMiddleware)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  <div>
    <App />
    <Login />
  </div>
  </Provider>
  , document.querySelector('.container'));
