import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// const newPost = {
//   userId: 1,
//   id: 11111,
//   title: 'hello',
//   body: 'vsbfdbf',
// };

// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify(newPost),
// })
//   .then(data => {
//     return data.json();
//   })
//   .then(info => {
//     console.log(info);
//   });
