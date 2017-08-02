import {call, put, select, takeEvery, takeLatest} from 'redux-saga/effects'

import {UI, updateResult} from "../actions/action-ui";
import {sendCommand} from "../utils/utils-data";

/*
 * Selectors
 */
const getLayoutName = state => state.getIn(['ui', 'layoutName']);
const getVisualBounds = state => state.getIn(['ui', 'visualBounds']).toJS();

/*
 * Load the data from the server
 */
function* sendCommandHandler(action) {
    try {
        yield call(sendCommand, action.payload);
    } catch (error) {
    }
}

/*
 * All of the watchers
 */
export default function* loadData() {
    yield takeLatest(UI.SEND_COMMAND, sendCommandHandler);
}
