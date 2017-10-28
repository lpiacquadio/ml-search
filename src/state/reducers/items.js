import * as actions from '../actions';

var defaultState = null;

export default function items(state = defaultState, action) {
    switch (action.type) {

        case actions.GET_ITEMS:
            if (!action.error) {
                return action.payload.data;
            }
            return null;

        default:
            return null;

    }
}
