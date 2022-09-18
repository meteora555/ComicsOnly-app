import React from 'react';
import { Link } from 'react-router-dom';

import right from '../assets/images/icons/right.png';
import left from '../assets/images/icons/left.png';
import up from '../assets/images/icons/up.png';

import page1 from '../../src/assets/images/content/batman-3-1.jpg';

function Reader() {
  return (
    <div className="reader">
      <div className="reader__wrapper">
        <div className="reader__nav">
          <button className="reader__nav-btn">
            <Link to="/">Главная</Link>
          </button>
          <button className="reader__nav-btn">
            <Link to="/catalog">Каталог</Link>
          </button>
        </div>
        <div className="reader__info">
          <h4 className="reader__info-title">Бетмен</h4>
          <p>
            том <b>2</b>
          </p>
        </div>
        <span className="reader__selector">
          <img src={left} alt="left-img" />
          <span>
            Страница <b>1</b>/<b>20</b>
          </span>
          <img src={right} alt="left-img" />
        </span>
        <div className="reader__options"></div>
      </div>
      <div className="reader__view">
        <div className="reader__item-wrap">
          <img className="reader__item" src={page1} alt="page-1" />
        </div>
      </div>
      <div className="control">
        <label className="control__pages">
          Страница <b>1</b>/<b>20</b>
        </label>
        <div className="control__arrow">
          <button className="control__arrow-btn">
            <img src={left} alt="left-img" />
          </button>
          <button className="control__arrow-btn">
            <img src={right} alt="right-img" />
          </button>
        </div>
        <div className="control__up">
          <img src={up} alt="up" />
        </div>
      </div>
      <div className="reader__footer">Главная</div>
    </div>
  );
}

export default Reader;
