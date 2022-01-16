import React from 'react';

import '../Styles/description.scss';

const Description = () => {
  return (
    <article className="card__data flex">
      <h1 className="card__data--title">Order Summary</h1>
      <p className="card__data--description">
        You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you
        like!
      </p>
    </article>
  );
};

export default Description;
