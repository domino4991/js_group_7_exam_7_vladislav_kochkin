import React from 'react';
import './Goods.css';
import Product from "../Product/Product";

const Goods = props => {
    return (
        <div className="goods">
            {props.goods.map(item => <Product
                key={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
                onGoodsClick={() => props.onGoodsClick(item.name)}
            />)}
        </div>
    );
};

export default Goods;