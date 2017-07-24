import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';

import './index.css';
import { App } from './App';
import registerServiceWorker from './registerServiceWorker';

const history = createHistory();

const store = createStore(
  combineReducers({
    router: routerReducer
  }),
  applyMiddleware(routerMiddleware(history))
);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App/>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
