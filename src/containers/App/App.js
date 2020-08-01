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
  const [goods, setOrder] = useState({
    products: [
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
    const index = goods.products.findIndex(g => g.id === id);
    const products = [...goods.products];
    products[index].count++;
    let totalPrice = goods.totalPrice + products[index].price;
    setOrder({
      products,
      totalPrice
    });
  };

  const removeOrder = id => {
    const index = goods.products.findIndex(g => g.id === id);
    const products = [...goods.products];
    let totalPrice = goods.totalPrice;
    if(products[index].count !== 0) {
      products[index].count--;
      totalPrice = goods.totalPrice - products[index].price;
    }
    setOrder({
      products,
      totalPrice
    })
  }

  return (
    <div className="App">
      <div className="container">
        <Orders
            products={goods.products}
            totalPrice={<TotalPrice totalPrice={goods.totalPrice}/>}
            onRemoveClick={removeOrder}
        />
        <Goods
            goods={goods.products}
            onGoodsClick={addOrder}
        />
      </div>
    </div>
  );
}

export default App;
