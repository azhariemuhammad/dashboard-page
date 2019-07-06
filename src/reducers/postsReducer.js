import * as types from '../types';

const initialState = {
    posts: [],
    selected: {}
}
function postReducer( state = initialState, {type, payload}) {
    switch (type) {
        case types.GET_POSTS:
            return {...state, posts: payload}
        case types.ADD_NEWPOST:
            return {...state, posts: [...state.posts, payload]}
        case types.GET_POSTS_BY_ID:
            return {...state, selected: payload}
        case types.EDIT_POST:
            return {...state, selected: payload}
        case types.DELETE_POST:
            return {...state, selected: {}}
        default:
            return state
    }
}

export default postReducer
