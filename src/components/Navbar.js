import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar white p-two">
      <div className="flexbox">
        <NavLink to="/" className="white" style={{ fontSize: '12px' }}>
          <i className="fa fa-chevron-left" aria-hidden="true" />
          Home
        </NavLink>
        <div className="h-flex icon">
          <span style={{ margin: '0 100px' }} className="font-4">
            cryptos
          </span>
          <i className="fa-solid fa-microphone" />
          <i className="fa-solid fa-gear" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
