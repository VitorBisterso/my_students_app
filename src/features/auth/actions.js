import Types from './actionTypes';

const registerRequestAction = () => ({ type: Types.REGISTER_REQUEST });
const registerSuccessAction = () => ({ type: Types.REGISTER_SUCCESS });
const registerFailedAction = errorMessage => ({
  type: Types.REGISTER_FAILED,
  payload: errorMessage
});

export default {
  registerRequestAction,
  registerSuccessAction,
  registerFailedAction
};
