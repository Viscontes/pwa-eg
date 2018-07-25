import React from 'react';
import { shallow } from 'enzyme';
import ErrorBoundry from './ErrorBoundry';

let wrapper;

describe('<ErrorBoundry /> component', () => {
  beforeAll(() => {
    wrapper = shallow(<ErrorBoundry />);
  });
  it('expects to have no error', () => {
    expect(wrapper.state().hasError).toEqual(false);
  });

  it('expects to show an error message', () => {
    wrapper.instance().componentDidCatch();
    expect(wrapper.state().hasError).toEqual(true);
  });
});
