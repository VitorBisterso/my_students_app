import types from './actionTypes';

export const initialState = {
  isLogged: false,
  isLoading: false,
  error: false,
  errorMessage: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.REGISTER_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false
      };
    case types.REGISTER_FAILED:
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
