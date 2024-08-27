import React from 'react';

import pizzas from '../assets/json/pizza.json';
import '../scss/app.scss';
import { Category } from './Components/Category';
import { PizzaBlock } from './Components/PizzaBlock';
import { Sort } from './Components/Sort';

export const Main = () => {
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
          {pizzas.map(obj => (
            <PizzaBlock {...obj} />
          ))}
        </div>
      </div>
    </div>
  );
};
