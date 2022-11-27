import React from 'react';

const LaptopVideo = () => {
  return (
    <section className='about-us-main'>
      <section className='row-main' id='row-main'>
        <section className='about-col-main' id='about-coll-main'>
          <h1>
            You Have The Vision;{' '}
            <span style={{ color: '#f44336' }}>
              We Have The People And Technology
            </span>
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
              <li style={{ listStyleType: 'disc' }}>Purring Energy</li>
              <li style={{ listStyleType: 'disc' }}>Purring Merchandise</li>
              <li style={{ listStyleType: 'disc' }}>Purring Capital</li>
            </ul>
            <br />
            Building with 3Ps (Patience, Prowess and Possibilities - for -
            Sustainability), while targeting verticals as well as horizontals.
            Our headquarters is located in Lagos, Nigeria.
            <br />
            <br />
            If you are in search of the right company, where you can achieve
            excellent results, Purring is the right place for you.
            <br />
            <br />
            To your exciting realities...
            <i class='fa fa-trademark' id='fa fa-trademark' />
            <br />
            <br />
            <span style={{ color: '#f44336' }}>Our Focus</span> ~
            Diversity-Inclusion-Belonging (DIB) and Equity.
            <br />
            <br />
            <span style={{ color: '#f44336' }}>End - Goal</span> ~ Freedom to
            all our Esteemed Customers first.
          </p>
          <a
            href='https://www.linkedin.com/company/purringllc/'
            target='_blank'
            rel='noreferrer'
            className='hero-btn red-btn-main'
            id='hero-btn red-btn-main'
          >
            LINKEDIN PROFILE
          </a>
        </section>
        <section className='about-col-main' id='about-col-main'>
          <img src='Laptop.jpg' alt='' />
        </section>
      </section>
    </section>
  );
};

export default LaptopVideo;
