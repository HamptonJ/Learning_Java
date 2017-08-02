import {Map, List} from "immutable";

import {UI} from "../actions/action-ui";

export default function (state = Map({
    staged: Map({
        commandInput: ""
    }),
    result: List([])
}), action) {
    let s;
    switch (action.type) {
        case UI.UPDATE_INPUT:
            return state.setIn(['staged', 'commandInput'], action.payload);
        case UI.UPDATE_RESULT:
            return state.set('result', state.get('result').push(action.payload));
        default:
            return state;
    }

    return state;
};

