import React, { useState } from 'react';
import './App.css';

function Card({ image, price, title, description, notInterested }) {

  const [isExtended, setExtended] = useState(false);

 
  const getShortDescription = (text) => {
    return text.length > 100 ? text.substring(0, 100) + '...' : text;
  };


  const changeDescription = () => {
    setExtended(!isExtended);
  };

  return (
    <div className="card">
      <div className="img-price">
        <img src={image} alt={title} className="card-image" />
        <div className="card-price">${price}</div>
      </div>

      <div className="card-body">
        <h3>{title}</h3>
        <p className="description-info">
          {isExtended ? description : getShortDescription(description)}
          <span className="read-more" onClick={changeDescription}>
            {isExtended ? "View Less" : "Read More"}
          </span>
        </p>
        <button onClick={notInterested} className="card-button">
          Not Interested
        </button>
      </div>
    </div>
  );
}

export default Card;
