import types from './actionTypes';

const registerRequestAction = () => ({ type: types.REGISTER_REQUEST });
const registerSuccessAction = () => ({ type: types.REGISTER_SUCCESS });
const registerFailedAction = errorMessage => ({
  type: types.REGISTER_FAILED,
  payload: errorMessage
});

export default {
  registerRequestAction,
  registerSuccessAction,
  registerFailedAction
};
