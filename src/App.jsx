import { Route, Routes } from 'react-router';
import { Header } from './Components/Header';
import { Main } from './Main/Main';
import { CartEmpty } from './pages/CartEmpty';
import { NotFound } from './pages/NotFound/NotFound';
import './scss/app.scss';

export const App = () => {
  return (
    <div className="wrapper">
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFound />} />
        <Route path="cart" element={<CartEmpty />} />
        {/* <Main /> */}
      </Routes>
    </div>
  );
};
