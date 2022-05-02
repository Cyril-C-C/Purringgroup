import React from 'react';

const AboutContent = () => {
  return (
    <section className='about-us-main'>
      <section className='row-main' id='row-main'>
        <section className='about-col-main' id='about-coll-main'>
          <h1>
            To Your Exciting{' '}
            <span style={{ color: '#f44336' }}>Realities...</span>
          </h1>
          <p>
            We are fast growing conglomerate with diversified investments
            spanning across key business sectors of various economies.
            <br />
            <br />
            Purring has its subsidiaries:
            <ul style={{ paddingLeft: '3rem' }}>
              <br />
              <li style={{ listStyleType: 'disc' }}>Purring Technology</li>
              <li style={{ listStyleType: 'disc' }}>
                Purring Real Estate, Design and Facilities
              </li>
              <li style={{ listStyleType: 'disc' }}>Purring Merchandise</li>
              <li style={{ listStyleType: 'disc' }}>Purring Capital</li>
            </ul>
            <br />
            <br />
            And if you are in search of the right company, where you can achieve
            excellent results, Purring is the right place for you.
            <br />
            <br />
            <span style={{ color: '#f44336' }}>Founded</span> ~ 2017.
            <br />
            <br />
            <span style={{ color: '#f44336' }}>Specialties</span> ~ Technology;
            Trade; Real Estate, Design and Facilities; Investment; and General
            Contracts.
          </p>
          <a
            href='https://twitter.com/_Purring_?t=3tbsLvQKm_qYSVL9DBlcbg&s=08'
            target='_blank'
            rel='noreferrer'
            className='hero-btn red-btn-main'
            id='hero-btn red-btn-main'
          >
            EXPLORE MORE
          </a>
        </section>
        <section className='about-col-main' id='about-col-main'>
          <img src='About.jpg' alt='' />
        </section>
      </section>
    </section>
  );
};

export default AboutContent;
