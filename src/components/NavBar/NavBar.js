import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

// css
import "./NavBar.css";

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= 1000 ? true : false
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onResizeHandler = () => {
    console.log(window.innerWidth);
    if (window.innerWidth <= 1000) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
      setIsMenuOpen(false);
    }
  };
  useEffect(() => {
    window.onresize = onResizeHandler;
  }, []);

  return (
    <>
      <nav className="navBar">
        <h1 className="navBar__brand">
          <NavLink to="/">Eventman</NavLink>
        </h1>
        {!isMobile && (
          <ul className="navBar__list desktop">
            <li className="navBar__list-item">
              <NavLink to="/" exact>
                Home
              </NavLink>
            </li>
            <li className="navBar__list-item">
              <NavLink to="/services">Services</NavLink>
            </li>
            <li className="navBar__list-item">
              <NavLink to="/#about">About</NavLink>
            </li>
            <li className="navBar__list-item">
              <NavLink to="/#contact">Contact</NavLink>
            </li>
            <li className="navBar__list-item">
              <NavLink to="/auth">Login/Register</NavLink>
            </li>
          </ul>
        )}
        {isMobile && (
          <button
            className="mobileNav__btn"
            onClick={() => setIsMenuOpen(true)}
          >
            <HiMenuAlt3 />
          </button>
        )}
      </nav>
      {isMenuOpen && (
        <div className="mobileNav">
          <button
            className="mobileNav__btn-close"
            onClick={() => setIsMenuOpen(false)}
          >
            <AiOutlineClose />
          </button>
          <ul className="mobileNav__list">
            <li
              className="mobileNav__list-item"
              onClick={() => setIsMenuOpen(false)}
            >
              <NavLink to="/" exact>
                Home
              </NavLink>
            </li>
            <li
              className="mobileNav__list-item"
              onClick={() => setIsMenuOpen(false)}
            >
              <NavLink to="/services">Services</NavLink>
            </li>
            <li
              className="mobileNav__list-item"
              onClick={() => setIsMenuOpen(false)}
            >
              <NavLink to="/#about">About</NavLink>
            </li>
            <li
              className="mobileNav__list-item"
              onClick={() => setIsMenuOpen(false)}
            >
              <NavLink to="/#contact">Contact</NavLink>
            </li>
            <li
              className="mobileNav__list-item"
              onClick={() => setIsMenuOpen(false)}
            >
              <NavLink to="/auth">Login/Register</NavLink>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default NavBar;
