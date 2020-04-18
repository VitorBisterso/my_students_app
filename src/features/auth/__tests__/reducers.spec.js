import reducer, { initialState } from '../reducer';
import types from '../actionTypes';

describe('Auth reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  describe('Register', () => {
    it('should handle REGISTER_REQUEST', () => {
      const action = {
        type: types.REGISTER_REQUEST
      };
      expect(reducer(undefined, action)).toEqual({
        ...initialState,
        isLoading: true,
        hasCreated: false
      });
    });
    it('should handle REGISTER_SUCCESS', () => {
      const action = {
        type: types.REGISTER_SUCCESS
      };
      expect(reducer(undefined, action)).toEqual({
        ...initialState,
        isLoading: false,
        hasCreated: true
      });
    });
    it('should handle REGISTER_FAILED', () => {
      const errorMessage = 'Error creating user';
      const action = {
        type: types.REGISTER_FAILED,
        payload: errorMessage
      };
      expect(reducer(undefined, action)).toEqual({
        ...initialState,
        isLoading: false,
        error: true,
        errorMessage
      });
    });
  });

  describe('Login', () => {
    it('should handle LOGIN_REQUEST', () => {
      const action = {
        type: types.LOGIN_REQUEST
      };
      expect(reducer(undefined, action)).toEqual({
        ...initialState,
        isLoading: true
      });
    });
    it('should handle LOGIN_SUCCESS', () => {
      const token = 'Test token';
      const action = {
        type: types.LOGIN_SUCCESS,
        payload: token
      };
      expect(reducer(undefined, action)).toEqual({
        ...initialState,
        isLoading: false,
        isLogged: true,
        token
      });
    });
    it('should handle LOGIN_FAILED', () => {
      const errorMessage = 'Error during login';
      const action = {
        type: types.LOGIN_FAILED,
        payload: errorMessage
      };
      expect(reducer(undefined, action)).toEqual({
        ...initialState,
        isLoading: false,
        error: true,
        errorMessage
      });
    });
  });
});
