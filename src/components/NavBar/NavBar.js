import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

// global state
import { globalState } from "../../state/globalState";

// css
import "./NavBar.css";

const NavBar = () => {
  const { user, logout } = useContext(globalState);
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= 1000 ? true : false
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onResizeHandler = () => {
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

  // on mobile (modal open) disable scroll
  if (isMenuOpen) {
    document.documentElement.style.overflowY = "hidden";
  } else {
    document.documentElement.style.overflowY = "auto";
  }

  return (
    <>
      <nav className="navBar globalPadding">
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
              <a href="/#about">About</a>
            </li>
            <li className="navBar__list-item">
              <a href="/#contact">Contact</a>
            </li>
            {user && user.email !== "admin@eventman.com" ? (
              <>
                <li className="navBar__list-item">
                  <NavLink to="/user-dashboard">Dashboard</NavLink>
                </li>
                <li className="navBar__list-item">
                  <NavLink to="#" onClick={logout}>
                    Logout
                  </NavLink>
                </li>
              </>
            ) : user && user.email === "admin@eventman.com" ? (
              <>
                <li className="navBar__list-item">
                  <NavLink to="/admin">Admin</NavLink>
                </li>
                <li className="navBar__list-item">
                  <NavLink to="#" onClick={logout}>
                    Logout
                  </NavLink>
                </li>
              </>
            ) : (
              <li className="navBar__list-item">
                <NavLink to="/auth">Login/Register</NavLink>
              </li>
            )}
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
              <a href="/#about">About</a>
            </li>
            <li
              className="mobileNav__list-item"
              onClick={() => setIsMenuOpen(false)}
            >
              <a href="/#contact">Contact</a>
            </li>
            {user && user.email !== "admin@eventman.com" ? (
              <>
                <li
                  className="mobileNav__list-item"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <NavLink to="/user-dashboard">Dashboard</NavLink>
                </li>
                <li
                  className="mobileNav__list-item"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <NavLink to="#" onClick={logout}>
                    Logout
                  </NavLink>
                </li>
              </>
            ) : user && user.email === "admin@eventman.com" ? (
              <>
                <li
                  className="mobileNav__list-item"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <NavLink to="/admin">Admin</NavLink>
                </li>
                <li
                  className="mobileNav__list-item"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <NavLink to="#" onClick={logout}>
                    Logout
                  </NavLink>
                </li>
              </>
            ) : (
              <li
                className="mobileNav__list-item"
                onClick={() => setIsMenuOpen(false)}
              >
                <NavLink to="/auth">Login/Register</NavLink>
              </li>
            )}
          </ul>
        </div>
      )}
    </>
  );
};

export default NavBar;
