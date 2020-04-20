import { combineReducers } from 'redux';

import auth from '../features/redux/auth/reducer';
import students from '../features/redux/students/reducer';

export default combineReducers({
  auth,
  students
});
