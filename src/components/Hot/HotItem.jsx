import React from 'react';
import hotImg from '../../assets/images/content/cover.jpg';

function HotItem() {
  return (
    <div className="hot__items-item jump jump-y">
      <a href="/">
        <img src={hotImg} alt="hot-img" />
      </a>
      <h5 className="hot__items-item-title jump">Lorem, ipsum.</h5>
      <p className="hot__items-item-text">#2</p>
    </div>
  );
}

export default HotItem;
