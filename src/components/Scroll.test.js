import React from 'react';
import { shallow } from 'enzyme';
import Scroll from './Scroll';

it('expects to render <Scroll /> component', () => {
  expect(shallow(<Scroll />)).toMatchSnapshot();
});
