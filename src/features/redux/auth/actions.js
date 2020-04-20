import Types from './actionTypes';

const registerRequestAction = () => ({ type: Types.REGISTER_REQUEST });
const registerSuccessAction = () => ({ type: Types.REGISTER_SUCCESS });
const registerFailedAction = errorMessage => ({
  type: Types.REGISTER_FAILED,
  payload: errorMessage
});

const loginRequestAction = () => ({ type: Types.LOGIN_REQUEST });
const loginSuccessAction = token => ({
  type: Types.LOGIN_SUCCESS,
  payload: token
});
const loginFailedAction = errorMessage => ({
  type: Types.LOGIN_FAILED,
  payload: errorMessage
});

export default {
  registerRequestAction,
  registerSuccessAction,
  registerFailedAction,
  loginRequestAction,
  loginSuccessAction,
  loginFailedAction
};
