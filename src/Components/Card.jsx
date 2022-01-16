import React from 'react';

import '../Styles/card.scss';

const Card = (props) => {
  const cards = `card ${props.className}`;
  return <div className={cards}>{props.children}</div>;
};

export default Card;
