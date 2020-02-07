import Actions from './actions';
import Constants from '../../constants';

const registerUser = (email, password, registerToken) => dispatch => {
  dispatch(Actions.registerRequestAction);
  const { API_URL, AUTH_URL } = Constants;
  const url = `${API_URL}${AUTH_URL}/register`;
  const requestParams = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password,
      registerToken
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

export default { registerUser };
