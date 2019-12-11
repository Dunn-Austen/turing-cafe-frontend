import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <div className='card'>
      <p>Name: {props.name}</p>
      <p>Date: {props.date}</p>
      <p>Time: {props.time}</p>
      <p>Guests: {props.number}</p>
    </div>
  )
}

export default Card;
