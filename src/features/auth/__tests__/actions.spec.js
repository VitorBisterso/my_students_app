import Actions from '../actions';
import Types from '../actionTypes';

describe('Auth actions', () => {
  describe('Register', () => {
    it('should create an action to init a request to register user', () => {
      const expectedAction = {
        type: Types.REGISTER_REQUEST
      };
      expect(Actions.registerRequestAction()).toEqual(expectedAction);
    });
    it('should create an action to register a successful register user request', () => {
      const expectedAction = {
        type: Types.REGISTER_SUCCESS
      };
      expect(Actions.registerSuccessAction()).toEqual(expectedAction);
    });
    it('should create an action to register a failed register user request', () => {
      const errorMessage = 'Error creating user';
      const expectedAction = {
        type: Types.REGISTER_FAILED,
        payload: errorMessage
      };
      expect(Actions.registerFailedAction(errorMessage)).toEqual(
        expectedAction
      );
    });
  });
});
