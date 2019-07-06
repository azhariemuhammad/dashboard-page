import * as types from '../types'
import {baseService} from "../services";

export const addNewPost = (post) => {
    const newPost = {
        userId: post.userId,
        title: post.title,
        body: post.body
    }

    return async dispatch => {
        const posts = await baseService().createPost(newPost)
        dispatch(addNewPostSuccess(posts))
    }
}

export const getPostById = (id) => {
    return async dispatch => {
        const post = await baseService().getPostByPostId(id)
        dispatch(getPostByIdSuccess(post.data))
    }
}

export const getPostByIdSuccess = (post) => {
    return {
        type: types.GET_POSTS_BY_ID,
        payload: post
    }
}

export const addNewPostSuccess = (post) => {
    return {
        type: types.ADD_NEWPOST,
        payload: post.data
    }
}

export const getNewPostsSuccess = (post) => {
    return {
        type: types.GET_POSTS,
        payload: post.data
    }
}

export const getPostsByUserId = (userId) => {
    return async dispatch => {
        const posts = await baseService().getPostsByUserId(userId)
        dispatch(getNewPostsSuccess(posts))
    }
}


export const editPost = (post) => {
    const editedPost = {
        userId: post.userId,
        title: post.title,
        body: post.body,
        id: post.id
    }

    return async dispatch => {
        const editResult = await baseService().editPost(editedPost, post.id)
        dispatch(editPostSuccess(editResult))
        console.log(editResult)
    }
}

export const editPostSuccess = (edited) => {
    return {
        type: types.EDIT_POST,
        payload: edited.data
    }
}


export const deletePost = (id) => {
    return async dispatch => {
        const deletedPost = await baseService().deletePost(id)
        dispatch(deletePostSuccess())
        console.log(deletedPost)
    }
}

export const deletePostSuccess = () => {
    return {
        type: types.DELETE_POST,
    }
}
