import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../../layouts/Main';

const AboutUs = () => (
  <Main
    title="About Us"
    description="AboutUsPage"
  >
    <article>
      <header>
        <div className="title">
          About Us
        </div>
      </header>
    </article>
  </Main>
);

export default AboutUs;
