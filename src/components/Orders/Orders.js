import React from 'react';
import './Orders.css';
import Order from "../Order/Order";

const Orders = props => {
    return (
        <div className="orders-wrapper">
            <h4>Заказ: </h4>
            <div className="orders">
                {props.products.map(item => {
                    if(item.count > 0) {
                        return <Order
                            key={item.id}
                            name={item.name}
                            count={item.count}
                            price={item.price}
                            onRemoveClick={() => props.onRemoveClick(item.id)}
                        />
                    } else {
                        return null;
                    }
                })}
                {props.totalPrice}
            </div>
        </div>
    );
};

export default Orders;