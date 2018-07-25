import React from 'react';
import { shallow } from 'enzyme';
import SearchBox from './SearchBox';

it('expects to render <SearchBox /> component', () => {
  expect(shallow(<SearchBox />)).toMatchSnapshot();
});
