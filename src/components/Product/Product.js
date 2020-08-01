import React from 'react';
import './Product.css';

const Product = props => {
    return (
        <div className="product" onClick={props.onGoodsClick}>
            <div className="product__img">{props.image}</div>
            <div className="product__info">
                <h5 className="product__name">{props.name}</h5>
                <p className="product__price">Price: {props.price} KGS</p>
            </div>
        </div>
    );
};

export default Product;