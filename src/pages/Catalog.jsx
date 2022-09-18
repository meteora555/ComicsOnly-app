import React from 'react';

import HotItem from '../components/Hot/HotItem';
import HotLoading from '../components/Hot/HotLoading';

function Catalog() {
  const catalogItems = ['Все', 'Марвел', 'ДС', 'Манга', 'Звездные Войны', 'Дисней'];
  const [isLoading, setIsLoading] = React.useState(true);

  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    fetch('https://632346ad362b0d4e7de066f9.mockapi.io/Comics')
      .then((res) => res.json())
      .then((obj) => {
        setItems(obj);
        setIsLoading(false);
      });
  }, []);

  const [active, setActive] = React.useState([]);
  const onSetCatalog = (index) => {
    setActive(index);
  };

  return (
    <div className="main__wrapper">
      <div className="container">
        <ul className="catalog__items">
          {catalogItems.map((name, index) => (
            <li key={name}>
              <button
                onClick={() => onSetCatalog(index)}
                className={
                  active === index ? 'catalog__button catalog__active' : 'catalog__button'
                }>
                {name}
              </button>
            </li>
          ))}
        </ul>
        <div className="catalog__content">
          {isLoading
            ? [...new Array(12)].map((_, index) => <HotLoading key={index} />)
            : items.map((obj) => <HotItem {...obj} key={obj.id} />)}
        </div>
      </div>
    </div>
  );
}

export default Catalog;
