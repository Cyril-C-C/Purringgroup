import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <Fragment>
      {/* Subsidiaries */}

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
          General Software Development: Website Development, Mobile App
          Development, Artificial Intelligence (AI) solutions, Continuous
          Integration (CI) and Continuous Delivery (CD) solutions, Intelligent
          Chatbots, Payment Solutions, User Interface (UI) and User Experience
          (UX) solutions are core services we offer to clients across businesses
          and NGOs world - wide.
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
          Purring Real Estate, Design and Facilities
        </h1>
        <p>
          Purring Real Estate, Design and Facilities is a real estate
          partnership company. With sound relationships, partnership and
          executive presence, we have positioned ourselves to accelerating
          developmental excellence in real estate, exterior and interior
          designs, and facility and property management.
          <br />
          <br />
          Our interest and undertakings span across various spaces from
          residential, through commercial, to industrial assets.
          <br />
          <br />
          We proffer sustainable development and support to exciting realities.
        </p>

        <section className='about-col-main' id='about-coll-main'>
          <a
            href='http://purringre.netlify.app/'
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
        <h1 style={{ color: 'red', fontSize: '1.25rem' }}>Purring Energy</h1>
        <p>
          Purring Energy is an energy solution product and servicing company
          committed to proffering incredible and sustainable values to its
          clients and communities. Its esteemed clients cut across major and
          independent Oil & Gas, Exploration and Production (E&P), Renewable
          Energy companies, and financial institutions funding energy projects.
          <br />
          <br />
          Petrophysics, Geoscience, Engineering with sound sense of Climate
          Intelligence, and Staffing and Recruitment are main services we
          provide. Integration, listening and making business - focused
          interpretation of sub - surface as well as surface Geoscience and
          Engineering data are our core competences; with the view to presenting
          and enriching our esteemed clients with sound integrated solutions.
        </p>

        <section className='about-col-main' id='about-coll-main'>
          <a
            href='http://purringen.netlify.app/'
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
          needs of its esteemed customers, either by sourcing or manufacturing.
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
      <br />

      {/* Affiliates */}

      <section className='testiomonial'>
        <h1>Affiliates (SPVs)</h1>
        <h1 style={{ color: 'red', fontSize: '1.25rem' }}>
          Purring Foundation
        </h1>
        <p>
          Purring Foundation is a Special Purpose Entity (SPE) of Purring Group
          which helps such Parent Company to facilitate its community outreach
          (both explicit and implicit social contracts) through Purring
          Corporate Social Responsibility Initiative (PCSRI).
          <br />
          <br />
          Playing a positive role in our communities and consideration of
          environmental and social impact of our business decisions geared up
          such substantive initiative. Our approach is centered on social,
          environmental, philanthropic, ethical and economic responsibility to
          making Ours best places beyond transacting with customers through good
          sense of corporate citizenship towards making possible higher
          standards of living and quality of life for our communities; and also,
          towards creating those frontiers for 'Corporate Social Responsibility
          and Employee Engagement' for company - specific benefits as well.
          <br />
          <br />
          Within our reach, sound investment in social sectors: health,
          education, housing, poverty eradication, etc. is the goal. This is
          because we really care...
        </p>

        <section className='about-col-main' id='about-coll-main'>
          <Link
            to='/#'
            className='hero-btn red-btn-main'
            id='hero-btn red-btn-main'
          >
            VISIT OTHERS
          </Link>
        </section>
      </section>
      <br />
      <br />
    </Fragment>
  );
};

export default Services;
