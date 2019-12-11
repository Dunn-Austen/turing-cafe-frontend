import React from 'react';
import App from './App';
import { shallow } from 'enzyme'

describe('App', () => {
  it('should include a newReservation in App\'s state on btn click', () => {
    const wrapper = shallow(<App />);
    const reservationToBeAdded = {
      name: "Christie",
      date: "12/29",
      time: "7:00",
      number: 12,
      key: "Christie12"
    };

    expect(wrapper.state('App')).toEqual([]);
    wrapper.instance().addReservation(reservationToBeAdded);
    expect(wrapper.state('App')).toEqual([reservationToBeAdded]);
  });
});


{/*
Property template

name={booking.name}
date={booking.date}
time={booking.time}
number={booking.number}
key={`${booking.name}${booking.number}`}

*/}
