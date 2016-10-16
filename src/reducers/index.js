import {combineReducers} from 'redux';
import gigs from './gigReducer';

const rootReducer = combineReducers({
    gigs: gigs
});

export default rootReducer;
