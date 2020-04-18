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

  describe('Login', () => {
    it('should create an action to init a request to login', () => {
      const expectedAction = {
        type: Types.LOGIN_REQUEST
      };
      expect(Actions.loginRequestAction()).toEqual(expectedAction);
    });
    it('should create an action to register a successful login request', () => {
      const token = 'test token';
      const expectedAction = {
        type: Types.LOGIN_SUCCESS,
        payload: token
      };
      expect(Actions.loginSuccessAction(token)).toEqual(expectedAction);
    });
    it('should create an action to register a failed login request', () => {
      const errorMessage = 'Error during login';
      const expectedAction = {
        type: Types.LOGIN_FAILED,
        payload: errorMessage
      };
      expect(Actions.loginFailedAction(errorMessage)).toEqual(expectedAction);
    });
  });
});
