import reducer, { initialState } from '../reducer';
import types from '../actionTypes';

describe('Auth reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
  it('should handle REGISTER_REQUEST', () => {
    const action = {
      type: types.REGISTER_REQUEST
    };
    expect(reducer(undefined, action)).toEqual({
      ...initialState,
      isLoading: true
    });
  });
  it('should handle REGISTER_SUCCESS', () => {
    const action = {
      type: types.REGISTER_SUCCESS
    };
    expect(reducer(undefined, action)).toEqual({
      ...initialState,
      isLoading: false
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
