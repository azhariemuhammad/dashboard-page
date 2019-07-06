
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import { rootReducer } from '../reducers'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = applyMiddleware(thunk)
const enhancer = composeEnhancers(middleware)

let store = createStore(rootReducer, enhancer)


export default store
