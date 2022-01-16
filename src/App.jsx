import React from 'react';
import './Styles/App.scss';
import Card from './Components/Card';
import Picture from './Components/Picture';
import Description from './Components/Description';
import Price from './Components/Price';
import Button from './Components/Button';
import Footer from './Components/Footer';

const App = () => {
  return (
    <>
      <section className="cards section container">
        <Card className="card__container grid">
          <Picture />
          <Description />
          <Price />
          <Button />
        </Card>
      </section>
      <Footer />
    </>
  );
};

export default App;
