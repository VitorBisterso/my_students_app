import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './combineReducers';

export default createStore(rootReducer, applyMiddleware(thunkMiddleware));
