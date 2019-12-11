import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form';
import Reservations from '../Reservations/Reservations';


class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/reservations')
      .then(response => response.json())
      .then(data => this.setState({reservations: data}));
  }

  addReservation = (newReservation) => {
    this.setState({reservations: [...this.state.reservations, newReservation]});

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

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
        <Form addReservation={this.addReservation}/>
        </div>
        <div className='resy-container'>
          <Reservations reservations={this.state.reservations}/>
        </div>
      </div>
    )
  }
}

export default App;
