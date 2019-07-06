import { combineReducers } from 'redux';
import postReducer from './postsReducer'
import commentReducer from "./commentsReducer";

export const rootReducer = combineReducers({
    postReducer,
    commentReducer
});
