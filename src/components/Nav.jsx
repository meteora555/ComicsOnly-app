import React from 'react';
import { Link } from 'react-router-dom';

import check from '../assets/images/icons/ok.svg';
import bookmark from '../assets/images/icons/bookmark.svg';
import catalog from '../assets/images/icons/catalog.svg';
import search from '../assets/images/icons/search.svg';

function Nav() {
  return (
    <div className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <a href="/" className="nav__item-link">
            <img className="nav__list-img" src={check} alt="check" />
            Прочитано
          </a>
        </li>
        <li className="nav__item">
          <Link to="/reader" className="nav__item-link">
            <img className="nav__list-img" src={bookmark} alt="note" />
            Сейчас читают
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/catalog" className="nav__item-link">
            <img className="nav__list-img" src={catalog} alt="book" />
            Каталог
          </Link>
        </li>
      </ul>
      <div className="header__search">
        <input className="header__search-input" type="text" placeholder="Поиск..." />
        <button className="header__search-button">
          <img className="header__search-button-img" src={search} alt="search" />
        </button>
      </div>
    </div>
  );
}

export default Nav;
