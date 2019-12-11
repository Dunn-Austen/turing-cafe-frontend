import React from 'react';
import Form from './Form';
import { shallow } from 'enzyme'

describe('Form', () => {
  it('should clear state on btn click', () => {
    const wrapper = shallow(<Form />);
    const populatedState = {
      name: "Christie",
      date: "12/29",
      time: "7:00",
      number: "12"
    };
    const expectedState = {
      name: " ",
      date: " ",
      time: " ",
      number: " "
    };

    expect(wrapper.state('Form')).toEqual(populatedState);
    wrapper.instance().clearInputFields();
    expect(wrapper.state('Form')).toEqual(expectedState);
  });
});
