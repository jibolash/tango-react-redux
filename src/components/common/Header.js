import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
    return (
        <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <IndexLink to="/" className="navbar-brand">Tango</IndexLink>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav">
          </ul>
          <ul className="nav navbar-nav navbar-right">
              <li><IndexLink to="/about" activeClassName="active">About</IndexLink></li>
              <li><IndexLink to="/gigs" activeClassName="active">Gigs</IndexLink></li>
              <li><a href="#about">Join</a></li>
              <li><a href="#contact">Sign In</a></li>
          </ul>
        </div>
      </div>
    </nav>

    );
};

export default Header;
