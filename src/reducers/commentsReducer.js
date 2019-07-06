import * as types from '../types';

const initialState = {
    comments: []
}
function commentReducer( state = initialState, {type, payload}) {
    switch (type) {
        case types.GET_COMMENTS_BY_ID:
            return {...state, comments: payload}
        case types.ADD_NEW_COMMENT:
            return {...state, comments: [...state.comments, payload]}
        case types.EDIT_COMMENT:
            return {...state, comments: state.comments.map(comment => {
                    if (comment.id !== payload.id) {
                        return comment
                    }
                    return {...comment, ...payload}
                })}
        case types.DELETE_COMMENT:
            return {...state, comments: state.comments.filter(({id}) => id !== payload)}
        default:
            return state
    }
}

export default commentReducer
