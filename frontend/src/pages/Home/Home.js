import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../../layouts/Main';

const Home = () => (
  <Main
    title="Home"
    description="Homepage"
  >
    <article>
      <header>
        <div className="title">
          Homepage
        </div>
      </header>
    </article>
  </Main>
);

export default Home;
