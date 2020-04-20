import types from './actionTypes';

export const initialState = {
  isLoading: false,
  error: false,
  students: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_ALL_STUDENTS_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case types.FETCH_ALL_STUDENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        students: action.payload
      };
    case types.FETCH_ALL_STUDENTS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: true
      };
    default:
      return state;
  }
}
