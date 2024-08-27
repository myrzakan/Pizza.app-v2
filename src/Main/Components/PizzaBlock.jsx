import React from 'react';
import '../../scss/app.scss';

export const PizzaBlock = () => {
  const [count, setCount] = React.useState(0);

  const onClinkButtonAdd = () => {
    setCount(count + 1);
  };

  return (
    <div className="pizza-block">
      <img
        class="pizza-block__image"
        src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
        alt="Pizza"
      />
      <h4 class="pizza-block__title">Чизбургер-пицца</h4>
      <div class="pizza-block__selector">
        <ul>
          <li class="active">тонкое</li>
          <li>традиционное</li>
        </ul>
        <ul>
          <li class="active">26 см.</li>
          <li>30 см.</li>
          <li>40 см.</li>
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от 365 ₽</div>
        <div className="button button--outline button--add">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.30005 1.20001C6.52525 1.20001 6.75045 1.27921 6.92505 1.42581L10.6001 4.77581C10.8001 4.94001 10.8001 5.26041 10.6001 5.42461L6.92505 8.77461C6.77505 8.90101 6.57545 8.97001 6.37505 8.97001C6.17505 8.97001 5.97545 8.90101 5.82545 8.77461L2.15005 5.42461C1.95005 5.26041 1.95005 4.94001 2.15005 4.77581L5.82505 1.42581C6.00005 1.27921 6.22525 1.20001 6.45005 1.20001H6.30005Z"
              fill="#EB5A1E"
            />
          </svg>
          <span onClick={() => onClinkButtonAdd()}>В корзину</span>
          <i>{count}</i>
        </div>
      </div>
    </div>
  );
};
