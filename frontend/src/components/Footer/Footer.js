import React from "react";
import { Link } from "react-router-dom";

import routes from "../../data/routes";

const { PUBLIC_URL } = process.env;

const Footer = () => (
  <footer>
    <div className="footer">
      <div className="row">
        <ul>
        {routes.filter((l) => !l.index).map((l) => (
            <li>
                <Link to={l.path}>{l.label}</Link>
            </li>
        ))}
        </ul>
      </div>

      <div className="row">
        Copyright © 2021 Shoparize || <a href="https://kirbay.com" target="_blank">Fırat Cihangir KIRBAY</a>
      </div>
    </div>
  </footer>
);

export default Footer;
