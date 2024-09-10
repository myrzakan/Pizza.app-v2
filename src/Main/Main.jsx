import React from 'react';

import pizzas from '../assets/json/pizza.json';
import '../scss/app.scss';
import { Category } from './Components/Category';
import { PizzaBlock } from './Components/PizzaBlock';
import { Sort } from './Components/Sort';

export const Main = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setIsLoading(true);
    fetch('https://66e05a9c2fb67ac16f2953b1.mockapi.io/items')
      .then(res => res.json())
      .then(arr => {
        setItems(arr);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Ошибка при загрузке данных:', error);
        setIsLoading(false);
      });
  }, []);

  console.log(pizzas);
  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Category />
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {isLoading ? (
            <p>Загрузка пицц...</p>
          ) : (
            items.map(obj => <PizzaBlock key={obj.id} {...obj} />)
          )}
        </div>
      </div>
    </div>
  );
};
