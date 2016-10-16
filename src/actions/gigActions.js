import * as types from './actionTypes';
import gigApi from '../api/gigApi';

export function loadGigsSuccess(gigs) {
    return {type: types.LOAD_GIGS_SUCCESS, gigs: gigs};
}

export function loadGigs() {
    return function(dispatch) {
        return fetch('https://tangong-api.herokuapp.com/api/gigs').then(response => {
            return response.json();
        }).then(json => {
            dispatch(loadGigsSuccess(json));
        })
        .catch(error => {
            throw(error);
        });
    };
}

// export function loadGigs() {
//     return function(dispatch) {
//         return gigApi.getAllGigs().then(gigs => {
//             dispatch(loadGigsSuccess(gigs));
//         }).catch(error => {
//             throw(error);
//         });
//     }
// }
