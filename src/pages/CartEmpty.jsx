import React from 'react';
import { Link } from 'react-router-dom';
import imgCartEmpty from '../assets/empty-cart.png';

export const CartEmpty = () => {
  return (
    <>
      <div className="cart cart--empty">
        <h2>
          Корзина пустая{' '}
          <span role="img" aria-label="sad-face">
            😕
          </span>
        </h2>
        <p>
          Вероятней всего, вы не заказывали ещё пиццу.
          <br />
          Для того, чтобы заказать пиццу, перейди на главную страницу.
        </p>
        <img src={imgCartEmpty} alt="Empty cart" />
        <Link to="/" className="button button--black">
          <span>Вернуться назад</span>
        </Link>
      </div>
    </>
  );
};
