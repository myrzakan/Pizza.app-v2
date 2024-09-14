import React from 'react';
import styles from './NotFound.module.scss';

export const NotFound = () => {
  return (
    <div className={styles.NotFound}>
      <h1>
        <span>😕</span> <br /> Ничего не найдено
      </h1>
      <p>К сожалении данная страница отсутсвует в нашем интернет магазине</p>
    </div>
  );
};
