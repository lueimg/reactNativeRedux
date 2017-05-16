import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './src/reducers.js';
import Root from './src/index';

const logger = createLogger();
const storeWithM = applyMiddleware(thunk, logger)(createStore);
const store = storeWithM(rootReducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}

