import {call, put, select, takeEvery, takeLatest} from 'redux-saga/effects'

import {STARTUP} from "../actions/action-startup";
import {initializeWebsocket, updateGeeklistsFromServer} from "../utils/utils-startup";
import {updateResult} from "../actions/action-ui";

/*
 * Load the data from the server
 */
function* init(dispatch, action) {
    try {
        const stompClient = yield call(initializeWebsocket);
        stompClient.subscribe('/topic/progress', (message) => {
            if (message.body)
                dispatch(updateResult(JSON.parse(message.body)));
        });
    } catch (error) {
        console.log("Error", error);
    }
}

/*
 * All of the watchers
 */
export default function* startup(dispatch) {
    yield takeLatest(STARTUP.INIT, init, dispatch);
}
