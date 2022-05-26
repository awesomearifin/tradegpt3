import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";
// import TemporaryDrawer from '../drawer/Drawer';
import "./navbar.css";

const Menu = () => (
  <>
    <p>
      <a href="#trading">Trading</a>
    </p>
    <p>
      <a href="#investing">Investing</a>
    </p>
    <p>
      <a href="#stocks">Stocks</a>
    </p>
    <p>
      <a href="#crypto">Crypto</a>
    </p>
    <p>
      <a href="#mutual-funds">Mutual Funds</a>
    </p>
    <p>
      <a href="#country">Country</a>
    </p>
  </>
);
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      {/* <div className="navbar-links"> */}
      <div className="navbar-links_logo">
        <img src={logo} alt="logo" />
      </div>
      {/* </div> */}
      <div className="navbar-links_container">
        <Menu />
      </div>
      {/* </div> */}
      <div className="navbar-sign">
        <p>
          <button type="button">Sign in</button>
        </p>
        <button type="button">Sign up</button>
      </div>
      <div className="navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="navbar-menu_container scale-up-center">
            <div className="navbar-menu_container-links">
              <Menu />
            </div>
            <div className="navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
