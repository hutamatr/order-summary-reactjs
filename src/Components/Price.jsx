import React from 'react';

import '../Styles/price.scss';
import IconMusic from '../Images/icon-music.svg';

const Price = () => {
  return (
    <section className="card__price flex">
      <div className="card__price--details flex">
        <img src={IconMusic} alt="" className="card__price--img" />
        <div className="card__price--detail">
          <h5 className="card__price--detail-1">Annual Plan</h5>
          <p className="card__price--detail-2">$59.99/year</p>
        </div>
      </div>
      <a href="##" className="card__price--link">
        Change
      </a>
    </section>
  );
};

export default Price;
