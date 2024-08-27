import React from 'react';

export const Category = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const categories = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
  ];

  // const onClickCategory = index => {
  //   setActiveIndex(index);
  // };

  return (
    <div className="categories">
      <ul>
        {categories.map((value, i) => (
          <li
            onClick={() => setActiveIndex(i)}
            className={activeIndex === i ? 'active' : ''}
            key={i}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};
