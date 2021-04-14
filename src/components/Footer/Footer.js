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
            <Link to="/#about">About</Link>
            <Link to="/#contact">Contact</Link>
            <Link to="/account">Account</Link>
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
            <a href="https://facebook.com" target="blank">Facebook</a>
            <a href="https://twitter.com" target="blank">Twitter</a>
            <a href="https://instagram.com" target="blank">Instagram</a>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <p>© {new Date().getFullYear()} Eventman.</p>
      </div>
    </>
  );
};

export default Footer;
