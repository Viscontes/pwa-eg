import {
  CHANGE_SEARCH_FIELED,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAIL
} from './constants';

import * as reducers from './reducers';

describe('searchRobots reducer', () => {
  const initialStateSearch = { searchField: '' };

  it('expects to return an initial state', () => {
    expect(reducers.searchRobots(undefined, '')).toEqual(initialStateSearch);
  });

  it('expects to handle the CHANGE_SEARCH_FIELED action', () => {
    expect(
      reducers.searchRobots(initialStateSearch, {
        type: CHANGE_SEARCH_FIELED,
        payload: 'a'
      })
    ).toEqual({ searchField: 'a' });
  });
});

describe('requestRobots', () => {
  const initialStateRobots = { robots: [], isPending: false, error: '' };

  it('expects to return an initial state', () => {
    expect(reducers.requestRobots(undefined, '')).toEqual(initialStateRobots);
  });

  it('expects to handle the REQUEST_ROBOTS_PENDING action', () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_PENDING
      })
    ).toEqual({ ...initialStateRobots, isPending: true });
  });

  it('expects to handle the REQUEST_ROBOTS_SUCCESS action', () => {
    const mockRobots = [
      {
        id: 1,
        name: 'John Smith',
        username: 'john_smith',
        email: 'john@gmail.com'
      }
    ];
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_SUCCESS,
        payload: mockRobots
      })
    ).toEqual({ ...initialStateRobots, robots: mockRobots });
  });

  it('expects to handle the REQUEST_ROBOTS_FAIL action', () => {
    const mockError = 'Some error';
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_FAIL,
        payload: mockError
      })
    ).toEqual({ ...initialStateRobots, error: mockError });
  });
});
