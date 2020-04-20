import reducer, { initialState } from '../reducer';
import types from '../actionTypes';

describe('Students reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  describe('Fetch all students', () => {
    it('should handle FETCH_ALL_STUDENTS_REQUEST', () => {
      const action = {
        type: types.FETCH_ALL_STUDENTS_REQUEST
      };
      expect(reducer(undefined, action)).toEqual({
        ...initialState,
        isLoading: true
      });
    });
    it('should handle FETCH_ALL_STUDENTS_SUCCESS', () => {
      const students = [{ name: 'Test name' }];
      const action = {
        type: types.FETCH_ALL_STUDENTS_SUCCESS,
        payload: students
      };
      expect(reducer(undefined, action)).toEqual({
        ...initialState,
        isLoading: false,
        students
      });
    });
    it('should handle FETCH_ALL_STUDENTS_FAILED', () => {
      const action = {
        type: types.FETCH_ALL_STUDENTS_FAILED
      };
      expect(reducer(undefined, action)).toEqual({
        ...initialState,
        isLoading: false,
        error: true
      });
    });
  });
});
