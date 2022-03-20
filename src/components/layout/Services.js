import React, { Fragment } from 'react';

const Services = () => {
  return (
    <Fragment>
      <section className='testiomonial'>
        <h1>Subsidiaries</h1>
        <h1 style={{ color: 'red', fontSize: '1.25rem' }}>
          Purring Technology
        </h1>
        <p>
          We have the best expertise in proffering unique and best values to our
          clients with incredible speed, but yet sustainable.
          <br />
          <br />
          Purring Technology is a technology solution service provider in global
          market. With best practices, we provide bespoke technology services
          across related ecosystems.
          <br />
          <br />
          Website Development, Mobile App Development, Artificial Intelligence
          (AI) solutions, Continuous Integration (CI) and Continuous Delivery
          (CD) solutions, Intelligent Chatbots, Payment Solutions, User
          Interface (UI) and User Experience (UX) solutions are core services we
          offer to clients across businesses and NGOs world - wide.
        </p>

        <section className='about-col-main' id='about-coll-main'>
          <a
            href='http://purringco.netlify.app/'
            target='_blank'
            rel='noreferrer'
            className='hero-btn red-btn-main'
            id='hero-btn red-btn-main'
          >
            VISIT WEBSITE
          </a>
        </section>
      </section>
      <br />
      <br />
      <hr />

      <section className='testiomonial'>
        <h1 style={{ color: 'red', fontSize: '1.25rem' }}>
          Purring Merchandise
        </h1>
        <p>
          Purring Merchandise is a general merchandising and servicing company.
          Our extensive inventory includes all products our customers will be
          delighted with. We carry products from all over the globe and by only
          the best manufacturers.
          <br />
          <br />
          Purring Merchandise is strongly committed to meeting all procurement
          needs of its esteem customers.
        </p>

        <section className='about-col-main' id='about-coll-main'>
          <a
            href='https://www.instagram.com/purring_merchandise'
            target='_blank'
            rel='noreferrer'
            className='hero-btn red-btn-main'
            id='hero-btn red-btn-main'
          >
            VISIT HANDLE
          </a>
        </section>
      </section>
      <br />
      <br />
      <hr />

      <section className='testiomonial'>
        <h1 style={{ color: 'red', fontSize: '1.25rem' }}>Purring Capital</h1>
        <p>
          Purring Capital is a financial and investment company. It is committed
          to proffering incredible and sustainable values to its clients and
          communities.
          <br />
          <br />
          Purring Capital currently invests in: Technology Company.
        </p>

        <section className='about-col-main' id='about-coll-main'>
          <a
            href='http://purringca.netlify.app/'
            target='_blank'
            rel='noreferrer'
            className='hero-btn red-btn-main'
            id='hero-btn red-btn-main'
          >
            VISIT WEBSITE
          </a>
        </section>
      </section>
      <br />
    </Fragment>
  );
};

export default Services;
