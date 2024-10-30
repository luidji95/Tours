import React from 'react';
import './App.css'

function Card({image, price, title, description}) {
  return (
    <div className="card">
      <div className='img-price'>
        <img src={image} alt={title} className="card-image" />
        <div className="card-price">${price}</div>
      </div>
      <div className="card-body">
        <h3>{title}</h3>
        <p className='description-info'>{description}</p>
        <button className="card-button">Not Interested</button>
      </div>
    </div>
  );
}

export default Card;
