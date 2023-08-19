import React, { useContext } from 'react';
import './App.css';
import Home from './pages/home';
import { ConfigProvider } from 'antd';
import { appTheme } from './themes/Theme';
import { BrowserRouter as Router, Route, Routes, useParams } from "react-router-dom";
import AppleWatch from './pages/apple-watch';
import './index.css'
import Cart from './pages/cart';
import OrderDetail from './pages/order-detail';
import OrderHistory from './pages/order-history';
import UseCart, { CartContext } from './hooks/useCart';
import UseOrder, { OrderContext } from './hooks/useOrder';

function App() {

  const useCart = UseCart()
  const useOrder = UseOrder()

  return (
    <ConfigProvider theme={appTheme}>
      <CartContext.Provider value={useCart}>
        <OrderContext.Provider value={useOrder}>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/apple-watch" element={<AppleWatch />} />
              <Route path='/cart' element={<Cart />} />
              <Route path="/order/" >
                <Route path=":id" element={<OrderDetail />} />
              </Route>
              <Route path='/history' element={<OrderHistory />} />
            </Routes>
          </Router>
        </OrderContext.Provider>
      </CartContext.Provider>
    </ConfigProvider>
  );
}

export default App;
