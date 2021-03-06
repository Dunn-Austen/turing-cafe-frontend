import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      time: '',
      number: '',

    }
  }

  clearInputFields = event =>  {
    this.setState({name: '', date: '', time: '', number: ''})
  }

  handleUserInput = event => {
    this.setState({[event.target.name]: event.target.value});
  }

  submitReservation = event =>  {
    event.preventDefault();
    this.props.addReservation(this.state);
    this.clearInputFields()
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={(event) => this.handleUserInput(event)}
        />
        <input
          type='text'
          placeholder='Date (MM/DD)'
          name='date'
          value={this.state.date}
          onChange={(event) => this.handleUserInput(event)}
        />
        <input
          type='text'
          placeholder='Time'
          name='time'
          value={this.state.time}
          onChange={(event) => this.handleUserInput(event)}
        />
        <input
          type='number'
          placeholder='Number of Guests'
          name='number'
          value={this.state.number}
          onChange={event => this.handleUserInput(event)}
        />
        <button
          className="make-reservation"
          onClick={event => this.submitReservation(event)}>
            Make Reservation
        </button>
      </form>
    )
  }
}

export default Form;
