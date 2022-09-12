import React from 'react';
import LatestItem from './LatestItem';

function Latest() {
  return (
    <div className="latest">
      <h2 className="latest__title">Последнии выпуски</h2>
      <div className="latest__items">
        <LatestItem />
        <LatestItem />
        <LatestItem />
        <LatestItem />
        <LatestItem />
        <LatestItem />
        <LatestItem />
        <LatestItem />
        <LatestItem />
        <LatestItem />
        <LatestItem />
        <LatestItem />
      </div>
    </div>
  );
}

export default Latest;
