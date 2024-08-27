import React from 'react';

import '../scss/app.scss';
import { Category } from './Components/Category';
import { PizzaBlock } from './Components/PizzaBlock';
import { Sort } from './Components/Sort';

export const Main = () => {
  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Category />
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          <PizzaBlock />
          <PizzaBlock />
          <PizzaBlock />
          <PizzaBlock />
          <PizzaBlock />
          <PizzaBlock />
          <PizzaBlock />
          <PizzaBlock />
        </div>
      </div>
    </div>
  );
};
