import React from 'react';

import Love from '../Images/love.svg';
import '../Styles/footer.scss';

const Footer = () => {
  return (
    <footer class="footer section">
      <div class="footer__card container">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">
          Frontend Mentor
        </a>
        . Made with <img src={Love} class="footer__img" alt="" /> by
        <a href="https://twitter.com/huutamatr" target="_blank" rel="noreferrer">
          hutamatr
        </a>
        .
      </div>
    </footer>
  );
};

export default Footer;
