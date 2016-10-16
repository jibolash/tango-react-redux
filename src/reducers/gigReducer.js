import * as types from '../actions/actionTypes';

export default function gigReducer(state = [], action) {
    switch (action.type) {
        case types.LOAD_GIGS_SUCCESS:
            return action.gigs;
        default:
            return state;
    }
}
