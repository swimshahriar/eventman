import React from 'react';
import { Link } from 'react-router-dom';

// styles
import './Footer.css';

const Footer = () => {
  return (
    <>
      <div className="footer globalPadding">
        <div className="footer__item">
          <h4>Links</h4>
          <div className="footer__item-links">
            <Link to="/">Home</Link>
            <Link to="/">About</Link>
            <Link to="/">Contact</Link>
            <Link to="/">Account</Link>
          </div>
        </div>
        <div className="footer__item">
          <h4>Services</h4>
          <div className="footer__item-links">
            <Link to="/">Conference</Link>
            <Link to="/">Weeding</Link>
            <Link to="/">Fashion Show</Link>
            <Link to="/">Birthday</Link>
          </div>
        </div>
        <div className="footer__item">
          <h4>Socials</h4>
          <div className="footer__item-links">
            <Link to="/">Facebook</Link>
            <Link to="/">Twitter</Link>
            <Link to="/">Instagram</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
