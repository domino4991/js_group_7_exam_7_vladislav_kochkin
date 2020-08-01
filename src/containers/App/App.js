import React, {useState} from 'react';
import './App.css';

import {nanoid} from "nanoid";

import {FaHamburger} from 'react-icons/fa';
import {GiHamburger} from 'react-icons/gi';
import {GiPotato} from 'react-icons/gi';
import {GiCoffeeCup} from 'react-icons/gi';
import {FaCoffee} from 'react-icons/fa';
import {GiWaterBottle} from 'react-icons/gi';

import Goods from "../../components/Goods/Goods";
import Orders from "../../components/Orders/Orders";
import TotalPrice from "../../components/TotalPrice/TotalPrice";

const App = () => {
  const [order, setOrder] = useState({
    orders: [
      {name: 'Hamburger', price: 150, count: 0, image: <FaHamburger />, id: nanoid()},
      {name: 'Cheeseburger', price: 165, count: 0, image: <GiHamburger />, id: nanoid()},
      {name: 'Potato Fries', price: 60, count: 0, image: <GiPotato />, id: nanoid()},
      {name: 'Coffee', price: 80, count: 0, image: <GiCoffeeCup />, id: nanoid()},
      {name: 'Tea', price: 40, count: 0, image: <FaCoffee />, id: nanoid()},
      {name: 'Cola', price: 35, count: 0, image: <GiWaterBottle />, id: nanoid()},
    ],
    totalPrice: 0,
  });

  const addOrder = id => {
    const index = order.orders.findIndex(g => g.id === id);
    const orders = [...order.orders];
    orders[index].count++;
    let totalPrice = order.totalPrice + orders[index].price;
    setOrder({
      orders,
      totalPrice
    });
  };

  const removeOrder = id => {
    const index = order.orders.findIndex(g => g.id === id);
    const orders = [...order.orders];
    let totalPrice = order.totalPrice;
    if(orders[index].count !== 0) {
      orders[index].count--;
      totalPrice = order.totalPrice - orders[index].price;
    }
    setOrder({
      orders,
      totalPrice
    })
  }

  return (
    <div className="App">
      <div className="container">
        <Orders
            orders={order.orders}
            totalPrice={<TotalPrice totalPrice={order.totalPrice}/>}
            onRemoveClick={removeOrder}
        />
        <Goods
            goods={order.orders}
            onGoodsClick={addOrder}
        />
      </div>
    </div>
  );
}

export default App;
