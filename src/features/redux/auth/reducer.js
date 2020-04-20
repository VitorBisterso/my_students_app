import types from './actionTypes';

export const initialState = {
  isLogged: false,
  isLoading: false,
  error: false,
  errorMessage: '',
  hasCreated: false,
  token: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.REGISTER_REQUEST:
      return {
        ...state,
        isLoading: true,
        hasCreated: false
      };
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        hasCreated: true
      };
    case types.REGISTER_FAILED:
      return {
        ...state,
        isLoading: false,
        error: true,
        errorMessage: action.payload
      };
    case types.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLogged: true,
        token: action.payload
      };
    case types.LOGIN_FAILED:
      return {
        ...state,
        isLoading: false,
        error: true,
        errorMessage: action.payload
      };
    default:
      return state;
  }
}
