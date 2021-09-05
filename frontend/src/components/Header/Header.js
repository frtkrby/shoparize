import React from 'react';
import { Link } from 'react-router-dom';

import routes from '../../data/routes';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

// Websites Navbar, displays routes defined in 'src/data/routes'
const Header = () => (
  <header>
    <div className="header-logo">
      <Link to={'/'}>
        <img className="shoparize-logo" src={`${PUBLIC_URL}/images/logo_shoparize.png`} alt="" />
      </Link>
    </div>
    <nav>
      {routes.filter((l) => !l.index).map((l) => (
        /*<a key={l.label} href="#"></a>*/
        <Link to={l.path}>{l.label}</Link>
      ))}
    </nav>
  </header>
);

export default Header;
