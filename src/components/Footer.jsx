import React from 'react';

import twitter from '../assets/images/icons/twitter.svg';
import instagram from '../assets/images/icons/instagram.svg';
import google from '../assets/images/icons/google.svg';

function Footer() {
  return (
    <footer className=" footer">
      <div className="footer__wrapper">
        <div className="footer__info">
          <div className="footer__about">
            <h2 className="footer__about-title">о Comics only</h2>
            <p className="footer__about-text">
              Сайт создан для любителей комиксов всех возрастов, здесь вы найдете комиксы из разных
              вселенных. Все они доступны в отличном качестве совершенно бесплатно.
            </p>
            <p className="footer__about-copyright">© Copyright Digital Stores</p>
          </div>
          <div className="footer__menu">
            <ul className="footer__list">
              <li className="footer__item">
                <a className="footer__item-link" href="/">
                  Важная информация
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__item-link" href="/">
                  Помощь
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__item-link" href="/">
                  Наша команда
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__social">
            <ul className="footer__social-list">
              <li className="footer__social-item">
                <a className="footer__social-link" href="/">
                  {' '}
                  Telegram
                  <img className="footer__social-img" src={twitter} alt="twitter" />
                </a>
              </li>
              <li className="footer__social-item">
                <a className="footer__social-link" href="/">
                  {' '}
                  Instagram
                  <img className="footer__social-img" src={instagram} alt="instagram" />
                </a>
              </li>
              <li className="footer__social-item">
                <a className="footer__social-link" href="/">
                  {' '}
                  Google+
                  <img className="footer__social-img" src={google} alt="google" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
