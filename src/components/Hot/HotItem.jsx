import React from 'react';
import hotImg from '../../assets/images/content/cover.jpg';
import mark from '../../assets/images/icons/bookmark.svg';

function HotItem(obj) {
  console.log(obj);
  return (
    <div className="hot__items-item jump jump-y">
      <a href="/">
        <img src={obj.imageTitle} alt="hot-img" />
      </a>

      <h5 className="hot__items-item-title jump">{obj.name}</h5>
      <p className="hot__items-item-text">
        #{obj.vol}
        <img src={mark} alt="mark" />
      </p>
    </div>
  );
}

export default HotItem;
