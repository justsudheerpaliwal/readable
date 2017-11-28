import 'semantic-ui-css/semantic.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import createSagaMiddleware from 'redux-saga';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';
import rootSaga from './sagas';
import App from './App';

const sagaMiddleware = createSagaMiddleware();

const history = createHistory();

const middlewares = [
  sagaMiddleware,
  routerMiddleware(history),
];

const enhancers = [
  applyMiddleware(...middlewares),
];

const initialState = {};

// If Redux DevTools Extension is installed use it, otherwise use Redux compose
/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      shouldHotReload: false,
    })
    : compose;

const store = createStore(
  reducers,
  initialState,
  composeEnhancers(...enhancers),
);

// Extensions
store.runSaga = sagaMiddleware.run(rootSaga);

/* eslint-disable */
const RenderApp = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
);
/* eslint-enable */

ReactDOM.render(<RenderApp />, document.getElementById('app'));
registerServiceWorker();
