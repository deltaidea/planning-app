import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import { createLogger } from 'redux-logger';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { reducers } from './redux';

// Web worker that provides cache of assets. Thanks, react-create-app.
registerServiceWorker();

// Hook into HTML5 history.
const history = createHistory();
const historyMiddleware = routerMiddleware(history);

// Log all actions to console for convenience.
const loggerMiddleware = createLogger({
  collapsed: true
});

const store = createStore(
  combineReducers({ ...reducers, router: routerReducer }),
  applyMiddleware(historyMiddleware, loggerMiddleware)
);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App/>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
