import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../../layouts/Main';

const Products = () => (
  <Main
    title="Products"
    description="ProductsPage"
  >
    <article>
      <header>
        <div className="title">
          Products
        </div>
      </header>
    </article>
  </Main>
);

export default Products;
