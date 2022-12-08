import React from 'react';
import logo from '../asset/logo.png';

function Header() {
  return (
    <header className="header flexbox">
      <div className="logo-container">
        <img src={logo} alt="logo" id="Logo" />
      </div>
      <div className="icon flexbox">
        <i className="fa-solid fa-microphone" />
        <i className="fa-solid fa-gear" />
      </div>
    </header>
  );
}

export default Header;
