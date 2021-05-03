import { createStore, combineReducers, applyMiddleware } from 'redux'

import crdrReducer from '../Reducers/CrDeReducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    crdrReducer,

});


const configureStore = () => {
    return createStore(rootReducer, applyMiddleware(thunk))
}

export default configureStore;