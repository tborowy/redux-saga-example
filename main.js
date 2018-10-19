import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware, } from 'redux';
import createSagaMiddleware from 'redux-saga'

import Main from './components/main'
import reducer from './reducers'

import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(sagaMiddleware)
  ));
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}><Main/></Provider>, document.getElementById('root'));