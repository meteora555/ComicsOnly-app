import React from 'react';
import classnames from 'classnames';
import HotItem from '../components/Hot/HotItem';

function Catalog() {
  const catalogItems = ['Марвел', 'ДС', 'Манга', 'Звездные Войны', 'Дисней'];

  const [active, setActive] = React.useState(0);
  const onSetCatalog = (index) => {
    setActive(index);
  };
  return (
    <div className="main__wrapper">
      <div className="container">
        <ul className="catalog__items">
          {catalogItems.map((name, index) => (
            <li
              onClick={() => onSetCatalog(index)}
              key={name}
              className={active === index ? 'catalog__button catalog__active' : 'catalog__button'}>
              {name}
            </li>
          ))}
        </ul>
        <div className="catalog__content">
          <HotItem />
          <HotItem />
          <HotItem />
          <HotItem />
          <HotItem />
          <HotItem />
          <HotItem />
          <HotItem />
          <HotItem />
          <HotItem />
          <HotItem />
          <HotItem />
          <HotItem />
          <HotItem />
          <HotItem />
        </div>
      </div>
    </div>
  );
}

export default Catalog;
