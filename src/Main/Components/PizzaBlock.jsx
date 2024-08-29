import React from 'react';
import '../../scss/app.scss';

export const PizzaBlock = ({ title, price, imageUrl, sizes, types }) => {
  const [activeType, setActiveType] = React.useState(0);
  const [activeSize, setActiveSize] = React.useState(0);
  const typeNames = ['тонкое', 'традиционное'];

  return (
    <div className="pizza-block">
      <img class="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h4 class="pizza-block__title">{title}</h4>
      <div class="pizza-block__selector">
        <ul>
          {types.map(typeId => (
            <li
              key={typeId}
              onClick={() => setActiveType(typeId)}
              className={activeType === typeId ? 'active' : ''}
            >
              {typeNames[typeId]}
            </li>
          ))}
        </ul>
        <ul>
          {sizes.map((size, i) => (
            <li
              key={size}
              onClick={() => setActiveSize(i)}
              className={activeSize === i ? 'active' : ''}
            >
              {size} см.
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
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
          <span>В корзину</span>
          <i></i>
        </div>
      </div>
    </div>
  );
};
