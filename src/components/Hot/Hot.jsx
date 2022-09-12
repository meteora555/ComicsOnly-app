import React from 'react';
import HotItem from './HotItem';

function Hot() {
  return (
    <div className="hot">
      <h2 className="hot__title">Горячее</h2>
      <div className="hot__items">
        <HotItem />
        <HotItem />
        <HotItem />
        <HotItem />
      </div>
    </div>
  );
}

export default Hot;
