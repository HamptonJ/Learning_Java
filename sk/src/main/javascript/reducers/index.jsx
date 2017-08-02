import {combineReducers} from 'redux-immutable';
import {routerReducer} from 'react-router-redux'

import UIReducer from "./reducer-ui";

const allReducers = combineReducers({
    ui: UIReducer,
    router: routerReducer
});

export default allReducers;