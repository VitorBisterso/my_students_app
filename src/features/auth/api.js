import Actions from './actions';
import Constants from '../../constants';

const defaultParams = {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
};

const registerUser = (email, password, registerToken) => dispatch => {
  dispatch(Actions.registerRequestAction());

  const { API_URL, AUTH_URL } = Constants;
  const url = `${API_URL}${AUTH_URL}/register`;
  const requestParams = {
    ...defaultParams,
    body: JSON.stringify({
      email,
      password,
      token: registerToken
    })
  };

  fetch(url, requestParams)
    .then(response => response.json())
    .then(responseJson =>
      responseJson.success
        ? dispatch(Actions.registerSuccessAction())
        : dispatch(Actions.registerFailedAction(responseJson.error))
    )
    .catch(() => {
      const errorMessage = 'Error creating user';
      dispatch(Actions.registerFailedAction(errorMessage));
    });
};

const login = (email, password) => dispatch => {
  dispatch(Actions.loginRequestAction());

  const { API_URL, AUTH_URL } = Constants;
  const url = `${API_URL}${AUTH_URL}/login`;
  const requestParams = {
    ...defaultParams,
    body: JSON.stringify({
      email,
      password
    })
  };

  fetch(url, requestParams)
    .then(response => response.json())
    .then(responseJson =>
      responseJson.success
        ? dispatch(Actions.loginSuccessAction(responseJson.token))
        : dispatch(Actions.loginFailedAction(responseJson.error))
    )
    .catch(() => {
      const errorMessage = 'Error during login';
      dispatch(Actions.loginFailedAction(errorMessage));
    });
};

export default { registerUser, login };
