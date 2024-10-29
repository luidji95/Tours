import React from 'react';
import './App.css'

function Card({image, price, title, description}) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-body">
        <h3>{title}</h3>
        <span className="card-price">${price}</span>
        <p>{description}</p>
        <button className="card-button">Not Interested</button>
      </div>
    </div>
  );
}

export default Card;
