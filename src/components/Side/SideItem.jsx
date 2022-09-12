import React from 'react';
import sideItemImg from '../../assets/images/content/cover.jpg';

function SideItem() {
  return (
    <li className="mostviews__list-item">
      <img className="mostviews-img" src={sideItemImg} alt="side-img" />
      <div className="mostviews__description">
        <h4>name comics</h4>
        <p>23412 раз</p>
      </div>
    </li>
  );
}

export default SideItem;
