import React from 'react';
import latestImg from '../../assets/images/content/cover.jpg';

function LatestItem() {
  return (
    <div className="latest__item">
      <img className="latest__item-img jump jump-y" src={latestImg} alt="latest-img" />
      <div className="latest__description">
        <h4 className="latest__description-title"> title</h4>
        <p className="latest__description-text">#vol.3</p>
        <p className="latest__description-date">10.09.2022</p>
        <p className="latest__description-rating">7/10</p>
        <p className="latest__description-views">284</p>
      </div>
    </div>
  );
}

export default LatestItem;
