import React from 'react';
import './Reservations.css';
import Card from '../Card/Card';

const Reservations = (props) => {

  const reservationCards = props.reservations.map(booking => {
    return (
      <Card
        name={booking.name}
        date={booking.date}
        time={booking.time}
        number={booking.number}
        key={booking.number}
      />
    )
  })


  return (
    <div className="reservations">
      {reservationCards}
    </div>
  )
}

export default Reservations;


{/* */}
{/* */}
