import React from 'react';

const WorksContent = () => {
  return (
    <section className='about-us-main'>
      <section className='row-main' id='row-main'>
        <section className='about-col-main' id='about-coll-main'>
          <h1>
            We Provide The Experience{' '}
            <span style={{ color: '#f44336' }}>You Deserve</span>
          </h1>
          <p>
            Every project is born from a special set of challenges. We are proud
            of each and every product and service we create and render, whether
            for a publisher, nonprofit, museum, or brand. Organizations partner
            with us to unlock solutions catered for their needs today and
            flexible for what they will want tomorrow.
            <br />
            <br />
            Purring has experts in: Technology; Real Estate, Designs and
            Facility and Property Management; Branded Merchandise; Investment; Finance; and Climate
            Intelligence.
            <br />
            <br />
            <span style={{ color: '#f44336' }}>Founded</span> ~ 2017.
            <br />
            <br />
            <span style={{ color: '#f44336' }}>Specialties</span> ~ Technology;
            Real Estate, Design and Facilities; Trade; Investment; and General
            Contracts.
          </p>
          <a
            href='https://www.linkedin.com/company/purringllc'
            target='_blank'
            rel='noreferrer'
            className='hero-btn red-btn-main'
            id='hero-btn red-btn-main'
          >
            EXPLORE MORE
          </a>
        </section>
        <section className='about-col-main' id='about-col-main'>
          <img src='Works.jpg' alt='' />
        </section>
      </section>
    </section>
  );
};

export default WorksContent;
