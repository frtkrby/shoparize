import React from 'react';
import PropTypes from 'prop-types';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Main = (props) => (
  <HelmetProvider>
    <Helmet titleTemplate="%s | Shoparize" defaultTitle="Shoparize" defer={false}>
      {props.title && <title>{props.title}</title>}
      <meta name="description" content={props.description} />
    </Helmet>
    <div id="wrapper">
      <Header />
      <div id="main">
        {props.children}
      </div>
      <Footer />
    </div>
  </HelmetProvider>
);

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  fullPage: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
};

Main.defaultProps = {
  children: null,
  fullPage: false,
  title: null,
  description: "Shoparize.",
};

export default Main;
