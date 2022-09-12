import React from 'react';
import { Nav } from '../components';

import baner from '../assets/images/banner.png';
import logo from '../assets/images/logo.png';

function Header() {
  return (
    <header className="header">
      <div className="header__top">
        <a className="header__top-link" href="/">
          <img className="header__top-img" src={baner} alt="header img" />
        </a>
      </div>
      <div className="header__wrapper">
        <div className="header__logo">
          <a href="/" className="header__logo-link">
            <img className="header__logo-img" src={logo} alt="logo" />
          </a>
        </div>
        <Nav />
        <div className="header__list">
          <p className="header__list-title">Отложено для чтения</p>
          <button className="header__list-button">
            <span>
              <b>0</b> Комиксов
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
