import React from 'react';
import './Goods.css';
import Product from "../Product/Product";

const Goods = props => {
    return (
        <div className="goods-wrapper">
            <h4>Продукты: </h4>
            <div className="goods">
                {props.goods.map(item => <Product
                    key={item.id}
                    name={item.name}
                    price={item.price}
                    image={item.image}
                    onGoodsClick={() => props.onGoodsClick(item.id)}
                />)}
            </div>
        </div>
    );
};

export default Goods;