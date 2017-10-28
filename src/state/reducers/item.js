import * as actions from '../actions';

var defaultState = null;

export default function item(state = defaultState, action) {
    switch (action.type) {

        case actions.GET_ITEM_DETAIL:
            if (!action.error) {
                return action.payload.data;
            }
            return null;

        case actions.GET_ITEM_DESCRIPTION:
            if (!action.error) {
                return action.payload.data;
            }
            return null;

        default:
            return null;

    }
}
