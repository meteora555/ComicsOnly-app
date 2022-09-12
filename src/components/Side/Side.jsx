import React from 'react';
import SideItem from './SideItem';

function Side() {
  return (
    <div className="side">
      <div className="conteiner-side">
        <div className="description">
          <h2 className="description__title">Lorem ipsum dolor sit.</h2>
          <p className="description__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aspernatur, officia iste
            cupiditate soluta ab!
          </p>
        </div>
        <div className="mostviews">
          <h2 className="mostviews__title">Самые просматриваемые</h2>
          <ul className="mostviews__list">
            <SideItem />
            <SideItem />
            <SideItem />
            <SideItem />
            <SideItem />
            <SideItem />
            <SideItem />
            <SideItem />
            <SideItem />
            <SideItem />
            <SideItem />
            <SideItem />
            <SideItem />
            <SideItem />
            <SideItem />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Side;
