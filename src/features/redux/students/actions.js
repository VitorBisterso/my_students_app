import Types from './actionTypes';

const fetchAllStudentsRequestAction = () => ({
  type: Types.FETCH_ALL_STUDENTS_REQUEST
});
const fetchAllStudentsSuccessAction = students => ({
  type: Types.FETCH_ALL_STUDENTS_SUCCESS,
  payload: students
});
const fetchAllStudentsFailedAction = () => ({
  type: Types.FETCH_ALL_STUDENTS_FAILED
});

export default {
  fetchAllStudentsRequestAction,
  fetchAllStudentsSuccessAction,
  fetchAllStudentsFailedAction
};
