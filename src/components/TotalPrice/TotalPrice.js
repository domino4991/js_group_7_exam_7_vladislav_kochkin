import React from 'react';

const TotalPrice = props => {
    let message = (<p>Order is empty! Please add some items</p>);
    if(props.totalPrice > 0) {
        message = <p>Total price: {props.totalPrice}</p>
    }
    return (
        <div className="total-price">
            {message}
        </div>
    );
};

export default TotalPrice;