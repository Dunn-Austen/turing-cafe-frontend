import React, { Component, useState, useEffect } from 'react';
//By importing useState in your code you’re signaling the intent to hold some kind of state inside your React component.
import './App.css';
import Form from '../Form/Form';
import Reservations from '../Reservations/Reservations';


const App = () => {
  const [bookings, increaseBookings] = useState([]);
  //the useState argument is the actual starting state (empty array)

//ComponentDidMount is replaced with useEffect
  useEffect(() => {
    fetch('http://localhost:3001/api/v1/reservations')
      .then(response => response.json())
      .then(data => increaseBookings(data));
  });

    const addReservation = (newReservation) => {
      increaseBookings([...bookings, newReservation]);

      fetch('http://localhost:3001/api/v1/reservations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newReservation),
      })

        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log('Something witty'));
    }

    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
        <Form addReservation={addReservation}/>
        </div>
        <div className='resy-container'>
          <Reservations reservations={bookings}/>
        </div>
      </div>
    )
}

export default App;
