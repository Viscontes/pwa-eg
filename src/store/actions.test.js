import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import {
  CHANGE_SEARCH_FIELED,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAIL
} from './constants';
import { apiCall } from '../api/api';
import * as actions from './actions';

const middleware = [thunkMiddleware];
const mockStore = configureMockStore(middleware);

describe('setSearchField action', () => {
  it('expects to create an action to search robots', () => {
    const searchInput = 'some input';
    const expectedAction = {
      type: CHANGE_SEARCH_FIELED,
      payload: searchInput
    };
    expect(actions.setSearchField(searchInput)).toEqual(expectedAction);
  });
});

describe('requestRobots async actions', () => {
  const store = mockStore();
  it('expects to handle pending request', () => {
    store.dispatch(actions.requestRobots());
    const dispatchedActions = store.getActions();
    const expectedAction = {
      type: REQUEST_ROBOTS_PENDING
    };

    expect(dispatchedActions[0]).toEqual(expectedAction);
  });

  it('expects to call api', () => {
    fetch.mockResponse(
      JSON.stringify([
        {
          id: 9,
          name: 'Glenna Reichert',
          username: 'Delphine',
          email: 'Chaim_McDermott@dana.io'
        }
      ])
    );
    apiCall('https://jsonplaceholder.typicode.com/users');
    expect(fetch).toBeCalled();
  });

  it('expects to handle successful request', () => {
    fetch.mockResponse(
      JSON.stringify([
        {
          id: 9,
          name: 'Glenna Reichert',
          username: 'Delphine',
          email: 'Chaim_McDermott@dana.io'
        }
      ])
    );
    const expectedActions = [
      { type: 'REQUEST_ROBOTS_PENDING' },
      {
        payload: [
          {
            email: 'Chaim_McDermott@dana.io',
            id: 9,
            name: 'Glenna Reichert',
            username: 'Delphine'
          }
        ],
        type: 'REQUEST_ROBOTS_SUCCESS'
      }
    ];
    const store = mockStore();
    return store.dispatch(actions.requestRobots()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
