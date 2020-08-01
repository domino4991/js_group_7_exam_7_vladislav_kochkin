import React from 'react';
import './Order.css';
import {MdDeleteForever} from 'react-icons/md';

const Order = props => {
    return (
        <div className="order__item">
            <p className="order__txt">{props.name}</p>
            <p className="order__txt">x{props.count}</p>
            <p className="order__txt">{props.price} KGS</p>
            <button className="order__del-btn" type="button" onClick={props.onRemoveClick}><MdDeleteForever /></button>
        </div>
    );
};

export default Order;