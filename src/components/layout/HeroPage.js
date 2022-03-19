import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const HeroPage = () => {
  return (
    <Fragment>
      <section className='text-box' id='text-box'>
        <h1>
          A Fast Growing <span style={{ color: '#f44336' }}> Conglomerate</span>
        </h1>
        <p>Purring Technology, Purring Merchandise and Purring Capital</p>
        <Link to='/About' className='hero-btn' id='hero-btn'>
          Visit Us To Know More
        </Link>
      </section>
    </Fragment>
  );
};

export default HeroPage;
