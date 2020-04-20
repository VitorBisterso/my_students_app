import Actions from '../actions';
import Types from '../actionTypes';

describe('Students actions', () => {
  describe('Fetch all students', () => {
    it('should create an action to fetch all students', () => {
      const expectedAction = {
        type: Types.FETCH_ALL_STUDENTS_REQUEST
      };
      expect(Actions.fetchAllStudentsRequestAction()).toEqual(expectedAction);
    });
    it('should create an action due to fetching all students successfully', () => {
      const students = [{ name: 'Test name' }];
      const expectedAction = {
        type: Types.FETCH_ALL_STUDENTS_SUCCESS,
        payload: students
      };
      expect(Actions.fetchAllStudentsSuccessAction(students)).toEqual(
        expectedAction
      );
    });
    it('should create an action due to failing while fetching all students', () => {
      const expectedAction = {
        type: Types.FETCH_ALL_STUDENTS_FAILED
      };
      expect(Actions.fetchAllStudentsFailedAction()).toEqual(expectedAction);
    });
  });
});
