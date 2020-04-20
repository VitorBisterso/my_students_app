import Actions from './actions';
import ApiConstants from '../../../apiConstants';

const defaultParams = method => ({
  method,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

const fetchAllStudents = () => dispatch => {
  dispatch(Actions.fetchAllStudentsRequestAction());

  const { API_URL, STUDENTS_URL } = ApiConstants;

  const url = `${API_URL}${STUDENTS_URL}`;
  const requestParams = defaultParams('GET');

  fetch(url, requestParams)
    .then(response => response.json())
    .then(responseJson =>
      responseJson.success
        ? dispatch(Actions.fetchAllStudentsSuccessAction(responseJson.data))
        : dispatch(Actions.fetchAllStudentsFailedAction())
    )
    .catch(() => {
      dispatch(Actions.fetchAllStudentsFailedAction());
    });
};

export default { fetchAllStudents };
