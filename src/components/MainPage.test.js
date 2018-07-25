import React from 'react';
import { shallow } from 'enzyme';
import MainPage from './MainPage';

let wrapper;

describe('<MainPage /> component', () => {
  beforeEach(() => {
    const mockProps = {
      onRequestRobots: jest.fn(),
      robots: [],
      isPending: false,
      error: '',
      searchField: ''
    };
    wrapper = shallow(<MainPage {...mockProps} />);
  });

  it('expects to render component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('filters robots correctly', () => {
    const mockPropsWithSearchInput = {
      onRequestRobots: jest.fn(),
      robots: [
        {
          id: 1,
          name: 'John Smith',
          username: 'john_smith',
          email: 'john@gmail.com'
        }
      ],
      isPending: false,
      error: '',
      searchField: 'a'
    };
    expect(wrapper.instance().filterRobots([])).toEqual([]);

    wrapper = shallow(<MainPage {...mockPropsWithSearchInput} />);
    expect(wrapper.instance().filterRobots([])).toEqual([]);
  });
});
