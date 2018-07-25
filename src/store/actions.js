import {
  CHANGE_SEARCH_FIELED,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAIL
} from './constants';
import { apiCall } from '../api/api';

export const setSearchField = text => ({
  type: CHANGE_SEARCH_FIELED,
  payload: text
});

export const requestRobots = () => dispatch => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  return apiCall('https://jsonplaceholder.typicode.com/users')
    .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: REQUEST_ROBOTS_FAIL, payload: error }));
};
