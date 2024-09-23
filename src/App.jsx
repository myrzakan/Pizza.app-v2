import { Route, Routes } from 'react-router';
import { Header } from './Components/Header';
import { Main } from './Main/Main';
import { Cart } from './pages/Cart';
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
        <Route path="cartEmpty" element={<CartEmpty />} />
        <Route path="cart" element={<Cart />} />

        {/* <Main /> */}
      </Routes>
    </div>
  );
};
