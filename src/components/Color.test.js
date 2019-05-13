import React from 'react';
import { shallow } from 'enzyme';
import Color from './Color';

describe('color snapshots', () => {
  it('renders correct html', () => {
    const wrapper = shallow(<Color />);
    expect(wrapper).toMatchSnapshot();
  });
});
