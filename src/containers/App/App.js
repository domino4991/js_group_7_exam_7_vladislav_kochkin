import React from 'react';
import './App.css';

import {nanoid} from "nanoid";

import {FaHamburger} from 'react-icons/fa';
import {GiHamburger} from 'react-icons/gi';
import {GiPotato} from 'react-icons/gi';
import {GiCoffeeCup} from 'react-icons/gi';
import {FaCoffee} from 'react-icons/fa';
import {GiWaterBottle} from 'react-icons/gi';
import Goods from "../../components/Goods/Goods";

const GOODS_ITEMS = [
  {name: 'Hamburger', price: 150, image: <FaHamburger />, id: nanoid()},
  {name: 'Cheeseburger', price: 165, image: <GiHamburger />, id: nanoid()},
  {name: 'Potato Fries', price: 60, image: <GiPotato />, id: nanoid()},
  {name: 'Coffee', price: 80, image: <GiCoffeeCup />, id: nanoid()},
  {name: 'Tea', price: 40, image: <FaCoffee />, id: nanoid()},
  {name: 'Cola', price: 35, image: <GiWaterBottle />, id: nanoid()},
]

const App = () => {
  return (
    <div className="App">
      <Goods goods={GOODS_ITEMS}/>
    </div>
  );
}

export default App;
