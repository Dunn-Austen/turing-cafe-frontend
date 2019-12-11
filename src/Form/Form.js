import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      time: '',
      numGuests: '',

    }
  }


  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
        />
        <input
          type='text'
          placeholder='Date (MM/DD)'
          name='date'
          value={this.state.date}
        />
        <input
          type='text'
          placeholder='Time'
          name='time'
          value={this.state.time}
        />
        <input
          type='number'
          placeholder='Number of Guests'
          name='numGuests'
          value={this.state.number}
        />
        <button>Make Reservation</button>
      </form>
    )
  }
}

export default Form;
