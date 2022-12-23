import React, { useState, useEffect } from "react";
import "./navbar.css";
import {
  FaMoon,
  FaSearch,
  FaShoppingBag,
  FaUser,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {

  //  to set the colour of the navbar
  const [navStyle, setNavStyle] = useState({
    backgroundColor: "white",
  });

// to toggle the navbar color
  const toggle = (e) => {
    e.preventDefault();

    if (navStyle.backgroundColor == "white") {
      setNavStyle({
        backgroundColor: "pink",
      });
    } else {
      setNavStyle({
        backgroundColor: "white",
      });
    }
    console.log("hiiii");
  };

  // to toggle the media icons

  const [showMediaIcons, setShowMediaIcons] = useState(false);

  return (
    <div style={navStyle}>
      <nav className="main-nav">
        {/*  brand logo  */}
        <div className="logo">
          <img src="https://i.postimg.cc/pdKCZJpH/abc-removebg-preview.png" />
        </div>

       {/* Link for the other components */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <NavLink to="/">Products</NavLink>
            </li>
            <li>
            <NavLink to="/login">
              Brands
            </NavLink>
              {/* <NavLink to="/login">Login</NavLink> */}
            </li>
            <li>
              <NavLink to="/about">New</NavLink>
            </li>
            <li>
              <NavLink to="/cart">Offers</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Magazines</NavLink>
            </li>
          </ul>
        </div>

       {/*  icons with the links */}

        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a href="">
                <FaSearch className="search" />
              </a>
            </li>
            <li>
              <a href="">
                <FaMoon className="heart" onClick={toggle} />
              </a>
            </li>
            <li>
              <a href="">
                <FaUser className="smile" />
              </a>
            </li>
            <li>
              <a href="">
                <FaShoppingBag className="bag" />
              </a>
            </li>
          </ul>

          {/* hamburge menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
