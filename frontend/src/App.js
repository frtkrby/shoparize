import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './layouts/Main'; // fallback for lazy pages
import './assets/css/main.scss'; // All of our styles
import 'bootstrap/dist/css/bootstrap.min.css';
/*<Route component={NotFound} status={404} />*/

const { PUBLIC_URL } = process.env;

// Every route - we lazy load so that each page can be chunked
// NOTE that some of these chunks are very small. We should optimize
// which pages are lazy loaded in the future.
const Home = lazy(() => import('./pages/Home/Home'));
const Products = lazy(() => import('./pages/Products/Products'));
const AboutUs = lazy(() => import('./pages/AboutUs/AboutUs'));
const Contact = lazy(() => import('./pages/Contact/Contact'));

const App = () => (
  <BrowserRouter basename={PUBLIC_URL}>
    <Suspense fallback={<Main />}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/about-us" component={AboutUs} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default App;