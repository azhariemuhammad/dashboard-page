import * as types from '../types'
import {baseService} from "../services";

export const getCommentsById = (id) => {
    return async dispatch => {
        const comments = await baseService().getCommentsByPostId(id)
        dispatch(getCommentsByIdSuccess(comments.data))
    }
}

export const getCommentsByIdSuccess = (comments) => {
    return {
        type: types.GET_COMMENTS_BY_ID,
        payload: comments
    }
}

export const createNewComments = (id, newComments) => {
    return async dispatch => {
        const comments = await baseService().createComment(id, newComments)
        dispatch(createNewCommentSuccess(comments.data))
    }
}

export const createNewCommentSuccess = (comments) => {
    return {
        type: types.ADD_NEW_COMMENT,
        payload: comments
    }
}

export const editComment = (id, edited) => {
    return async dispatch => {
        const comments = await baseService().editComment(id, edited)
        dispatch(editCommentSuccess(comments.data))
    }
}

export const editCommentSuccess = (comments) => {
    return {
        type: types.EDIT_COMMENT,
        payload: comments
    }
}



export const deleteComment = (id) => {
    return async dispatch => {
        await baseService().deleteComment(id)
        dispatch(deleteCommentSuccess(id))
    }
}

export const deleteCommentSuccess = (id) => {
    return {
        type: types.DELETE_COMMENT,
        payload: id
    }
}
