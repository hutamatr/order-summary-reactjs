import React from 'react';

import Picture from '../Images/illustration-hero.svg';
import '../Styles/picture.scss';

const Image = () => {
  return <img src={Picture} alt="" className="card__image" />;
};

export default Image;
