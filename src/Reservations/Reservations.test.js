import React from 'react';
import { shallow } from 'enzyme';
import Reservations from './Reservations';

describe('reservations', () => {
  it('snapshot should depict accurately', () => {
    const wrapper = shallow(<Reservations
      reservations=[]
    />);

    expect(wrapper).toMatchSnapshot();
  });
});
