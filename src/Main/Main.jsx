import React from 'react';

import '../scss/app.scss';
import { Category } from './Components/Category';
import { PizzaBlock } from './Components/PizzaBlock';
import Skeleton from './Components/PizzaBlock/Skeleton';
import { Sort } from './Components/Sort';

export const Main = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch('https://66e05a9c2fb67ac16f2953b1.mockapi.io/items')
      // Парсинг ответа сервера и обновление состояния
      .then(res => res.json())
      .then(arr => {
        setItems(arr);
        setIsLoading(false);
      })
      // Обработка ошибок при загрузке данных
      .catch(error => {
        console.error('Ошибка при загрузке данных:', error);
        setIsLoading(false);
      });

    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Category />
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {isLoading // Если данные еще загружаются
            ? // то отображаем заглушки
              [...new Array(6)].map((_, index) => <Skeleton key={index} />)
            : // иначе отображаем список пицц
              items.map(obj => <PizzaBlock key={obj.id} {...obj} />)}
        </div>
      </div>
    </div>
  );
};
