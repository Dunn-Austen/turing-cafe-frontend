import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card', () => {
  it('snapshot should depict accurately', () => {
    const wrapper = shallow(<Card
      name="Christie"
      date="12/29"
      time="7:00"
      number="12"
      key="Christie12"
    />);

    expect(wrapper).toMatchSnapshot();
  });
});
