import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Routes from './routes';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';

import reduxThunk from 'redux-thunk';

import reducers from './reducers/index';

const createStoreWithMiddleware = compose(
  applyMiddleware(reduxThunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Routes/>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
