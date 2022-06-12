import {applyMiddleware, combineReducers, compose, legacy_createStore} from 'redux'
import { reducer } from './reducer';
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    
  todos: reducer,

})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));