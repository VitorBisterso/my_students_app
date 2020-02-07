import { createStore } from 'redux';
import rootReducer from './combineReducers';

export default createStore(rootReducer);
