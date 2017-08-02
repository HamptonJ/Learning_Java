import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import createSagaMiddleware from 'redux-saga';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import createHistory from 'history/createHashHistory';
import {Route, Redirect} from 'react-router';
import {ConnectedRouter, routerMiddleware} from 'react-router-redux';
import Immutable from 'immutable';

/* the combined reducers */
import allReducers from './reducers';

/* the root element */
import App from './components/app';

/* The root saga */
import root from './sagas/root-saga';

/* copies the file to dist */
require("file-loader?name=index.html!./index.html");

/* Create a history of your choosing (we're using a browser history in this case) */
const history = createHistory();

/* Build the middleware for intercepting and dispatching navigation actions */
const routeMiddleware = routerMiddleware(history);

/* creates the logger */
const logger = createLogger({
    collapsed: true,
    stateTransformer: state => state.toJS()
});

/* prepare the sagas */
const sagaMiddleware = createSagaMiddleware();

/* creates the store */
const initialState = Immutable.Map();
const store = applyMiddleware(sagaMiddleware, routeMiddleware, logger)(createStore)(allReducers, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

/* start the sagas */
sagaMiddleware.run(root, store.dispatch);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);