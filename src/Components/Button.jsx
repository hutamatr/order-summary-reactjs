import React from 'react';
import '../Styles/button.scss';

const Button = () => {
  return (
    <>
      <button className="card__button">Processed to Payment</button>
      <div className="card__cancel">
        <a href="##" className="card__cancel--link">
          Cancel Order
        </a>
      </div>
    </>
  );
};

export default Button;
